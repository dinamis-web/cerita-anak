export interface NarrationStatus {
  isSupported: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  hasIndonesianVoice: boolean;
  voiceName?: string;
  errorMessage?: string;
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private indonesianVoice: SpeechSynthesisVoice | null = null;
  private isVoiceLoaded = false;
  private rate: number = 0.95;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  public isSupported(): boolean {
    return !!this.synth;
  }

  public loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    if (voices && voices.length > 0) {
      this.isVoiceLoaded = true;
      // Look for Indonesian voice (id-ID, id_ID, or 'indonesia' in name/lang)
      this.indonesianVoice =
        voices.find(
          (v) =>
            v.lang.toLowerCase().replace('_', '-').startsWith('id') ||
            v.name.toLowerCase().includes('indonesia')
        ) ||
        voices.find((v) => v.lang.toLowerCase().replace('_', '-').startsWith('ms')) || // Melayu fallback
        null;
    }
  }

  public getStatus(): NarrationStatus {
    const supported = this.isSupported();
    if (!this.isVoiceLoaded && this.synth) {
      this.loadVoices();
    }
    return {
      isSupported: supported,
      isPlaying: this.synth ? this.synth.speaking && !this.synth.paused : false,
      isPaused: this.synth ? this.synth.paused : false,
      hasIndonesianVoice: !!this.indonesianVoice,
      voiceName: this.indonesianVoice?.name,
    };
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.6, Math.min(1.5, newRate));
    if (this.currentUtterance) {
      this.currentUtterance.rate = this.rate;
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public speak(
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (err: string) => void
  ) {
    if (!this.synth) {
      onError?.('Browser ini belum mendukung fitur pembacaan suara (Speech Synthesis).');
      return;
    }

    // Cancel any ongoing speech
    this.stop();

    const sanitized = text.replace(/[*_#]/g, '').trim();
    if (!sanitized) {
      onEnd?.();
      return;
    }

    if (!this.isVoiceLoaded) {
      this.loadVoices();
    }

    try {
      const utterance = new SpeechSynthesisUtterance(sanitized);
      this.currentUtterance = utterance;

      // Retain utterance on window to prevent Chrome Garbage Collection mid-speech
      if (typeof window !== 'undefined') {
        (window as unknown as { __ceritakita_active_utterance: SpeechSynthesisUtterance | null }).__ceritakita_active_utterance = utterance;
      }

      if (this.indonesianVoice) {
        utterance.voice = this.indonesianVoice;
        utterance.lang = this.indonesianVoice.lang;
      } else {
        utterance.lang = 'id-ID';
      }

      utterance.rate = this.rate;
      utterance.pitch = 1.05; // Friendly warm pitch

      utterance.onstart = () => {
        onStart?.();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        if (typeof window !== 'undefined') {
          (window as unknown as { __ceritakita_active_utterance: SpeechSynthesisUtterance | null }).__ceritakita_active_utterance = null;
        }
        onEnd?.();
      };

      utterance.onerror = (e) => {
        if (e.error === 'canceled' || e.error === 'interrupted') {
          // Normal stop/page turn event
          return;
        }
        this.currentUtterance = null;
        if (typeof window !== 'undefined') {
          (window as unknown as { __ceritakita_active_utterance: SpeechSynthesisUtterance | null }).__ceritakita_active_utterance = null;
        }
        onError?.(`Gagal membacakan: ${e.error || 'kesalahan audio'}`);
      };

      this.synth.speak(utterance);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Kesalahan sistem pembacaan suara';
      onError?.(msg);
    }
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
    }
  }

  public resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
      if (typeof window !== 'undefined') {
        (window as unknown as { __ceritakita_active_utterance: SpeechSynthesisUtterance | null }).__ceritakita_active_utterance = null;
      }
    }
  }
}

export const speechService = new SpeechService();
