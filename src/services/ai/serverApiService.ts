/**
 * Arsitektur Integrasi Server-Side API (Tahap Berikutnya)
 * 
 * Modul ini disiapkan untuk menghubungkan aplikasi ke backend proxy aman
 * (misalnya endpoint /api/story/generate, /api/story/revise, /api/illustration/generate).
 * 
 * PENTING:
 * 1. Tidak menyimpan kunci API (API Key) di kode klien/browser.
 * 2. Seluruh autentikasi dan kuota model LLM dijalankan di sisi server.
 * 3. Jika backend belum diimplementasikan atau server tidak merespons,
 *    layanan ini melempar error deskriptif sehingga aplikasi dapat
 *    fallback secara aman ke mode lokal prototype.
 */

import { Book } from '../../types';
import {
  IStoryTextService,
  IStoryRevisionService,
  IIllustrationService,
  StoryGenerationRequest,
  PageRevisionRequest,
  PageRevisionResult,
  IllustrationRequest,
  IllustrationResult,
  ServiceMode,
} from './types';

export class ServerSideStoryTextService implements IStoryTextService {
  readonly mode: ServiceMode = 'server_api';
  private endpoint = '/api/story/generate';

  async generateBook(params: StoryGenerationRequest): Promise<Book> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error(`Server API status: ${response.status}`);
      }

      const data = await response.json();
      return data.book;
    } catch {
      throw new Error(
        'Backend server-side AI belum dikonfigurasi. Silakan gunakan mode Template Studio Lokal.'
      );
    }
  }
}

export class ServerSideStoryRevisionService implements IStoryRevisionService {
  readonly mode: ServiceMode = 'server_api';
  private endpoint = '/api/story/revise';

  async revisePage(request: PageRevisionRequest): Promise<PageRevisionResult> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Server API status: ${response.status}`);
      }

      return await response.json();
    } catch {
      throw new Error(
        'Backend penyunting AI server belum terhubung. Menggunakan revisi studio lokal.'
      );
    }
  }
}

export class ServerSideIllustrationService implements IIllustrationService {
  readonly mode: ServiceMode = 'server_api';
  private endpoint = '/api/illustration/generate';

  async generateIllustrationAdvice(request: IllustrationRequest): Promise<IllustrationResult> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Server API status: ${response.status}`);
      }

      return await response.json();
    } catch {
      throw new Error(
        'Generator visual server belum aktif. Menggunakan ilustrasi SVG bawaan aplikasi.'
      );
    }
  }
}
