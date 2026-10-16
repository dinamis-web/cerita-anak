import React, { useState, useEffect } from 'react';
import {
  Book,
  BookPage,
} from '../types';
import { SceneIllustration } from './illustrations/SceneIllustration';
import { speechService } from '../services/speech';
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Square,
  RotateCcw,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Heart,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Sparkles,
} from 'lucide-react';

interface BookReaderProps {
  book: Book;
  onClose: () => void;
  onEditBook?: (book: Book) => void;
}

export const BookReader: React.FC<BookReaderProps> = ({
  book,
  onClose,
  onEditBook,
}) => {
  // -1 = Cover, 0 to pages.length-1 = Reading pages, pages.length = End page
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(-1);
  const [narrationState, setNarrationState] = useState<{
    isPlaying: boolean;
    isPaused: boolean;
    rate: number;
    supported: boolean;
    errorMessage?: string;
  }>({
    isPlaying: false,
    isPaused: false,
    rate: 0.95,
    supported: speechService.isSupported(),
  });
  const [fontSizeClass, setFontSizeClass] = useState<'normal' | 'large'>('normal');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalPages = book.pages.length;
  const isCover = currentPageIndex === -1;
  const isEndPage = currentPageIndex === totalPages;
  const activePage: BookPage | null =
    !isCover && !isEndPage ? book.pages[currentPageIndex] : null;

  // Cleanup speech synthesis on unmount
  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  // Stop speech synthesis whenever the page changes
  useEffect(() => {
    speechService.stop();
    setNarrationState((prev) => ({
      ...prev,
      isPlaying: false,
      isPaused: false,
      errorMessage: undefined,
    }));
  }, [currentPageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrevPage();
      } else if (e.key === 'Escape') {
        if (isFullscreen && document.fullscreenElement) {
          document.exitFullscreen?.().catch(() => {});
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex, totalPages, isFullscreen]);

  const goToNextPage = () => {
    if (currentPageIndex < totalPages) {
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPageIndex > -1) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  // Narration Handlers
  const handlePlayNarration = () => {
    if (!narrationState.supported) {
      setNarrationState((prev) => ({
        ...prev,
        errorMessage: 'Fitur suara tidak didukung oleh browser ini.',
      }));
      return;
    }

    if (narrationState.isPaused) {
      speechService.resume();
      setNarrationState((prev) => ({
        ...prev,
        isPlaying: true,
        isPaused: false,
      }));
      return;
    }

    let textToSpeak = '';
    if (isCover) {
      textToSpeak = `${book.title}. Dibuat oleh ${book.authorName}. Tokoh utama: ${book.characterName}. Tekan tombol buka cerita untuk mulai membaca bersama.`;
    } else if (isEndPage) {
      textToSpeak = `Tamat. Terima kasih telah membaca ${book.title}. Pesan moral cerita: ${book.moralValue}`;
    } else if (activePage) {
      textToSpeak = activePage.text;
    }

    speechService.speak(
      textToSpeak,
      () => {
        setNarrationState((prev) => ({
          ...prev,
          isPlaying: true,
          isPaused: false,
          errorMessage: undefined,
        }));
      },
      () => {
        setNarrationState((prev) => ({
          ...prev,
          isPlaying: false,
          isPaused: false,
        }));
      },
      (errorMsg) => {
        setNarrationState((prev) => ({
          ...prev,
          isPlaying: false,
          isPaused: false,
          errorMessage: errorMsg,
        }));
      }
    );
  };

  const handlePauseNarration = () => {
    speechService.pause();
    setNarrationState((prev) => ({
      ...prev,
      isPlaying: false,
      isPaused: true,
    }));
  };

  const handleStopNarration = () => {
    speechService.stop();
    setNarrationState((prev) => ({
      ...prev,
      isPlaying: false,
      isPaused: false,
    }));
  };

  const handleToggleRate = () => {
    const nextRate = narrationState.rate === 0.95 ? 1.15 : narrationState.rate === 1.15 ? 0.8 : 0.95;
    speechService.setRate(nextRate);
    setNarrationState((prev) => ({ ...prev, rate: nextRate }));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#162423]/92 backdrop-blur-md flex flex-col justify-between overflow-x-hidden overflow-y-auto selection:bg-[#DFBE72] selection:text-[#0D5C58]">
      {/* Top Reading Navigation Bar */}
      <header className="px-3 sm:px-6 py-3 bg-[#FFFDF9]/95 border-b border-[#EADFC9] shadow-xs flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              speechService.stop();
              onClose();
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold text-[#0D5C58] hover:bg-[#F3EBDD] rounded-xl transition-colors cursor-pointer min-h-[44px]"
            aria-label="Tutup pembaca buku"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            <span>Tutup</span>
          </button>

          <div className="hidden sm:block h-5 w-[1px] bg-[#DCD0B9]" />

          <div className="hidden sm:block truncate max-w-xs md:max-w-md">
            <h2 className="font-child text-sm md:text-base font-bold text-[#1F292E] truncate">
              {book.title}
            </h2>
          </div>
        </div>

        {/* Reader Tools: Font Size, Edit & Fullscreen */}
        <div className="flex items-center gap-1 sm:gap-2">
          {onEditBook && (
            <button
              onClick={() => {
                speechService.stop();
                onEditBook(book);
              }}
              className="text-xs font-semibold text-[#7A6B56] hover:text-[#0D5C58] px-3 py-2 rounded-xl hover:bg-[#F3EBDD] transition-colors min-h-[44px] flex items-center"
            >
              Edit Teks
            </button>
          )}

          <button
            onClick={() => setFontSizeClass((prev) => (prev === 'normal' ? 'large' : 'normal'))}
            title="Ubah Ukuran Huruf"
            className="p-2.5 text-[#7A6B56] hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-xl transition-colors cursor-pointer text-xs font-bold flex items-center gap-1 min-h-[44px] min-w-[44px] justify-center"
            aria-label="Ubah ukuran huruf"
          >
            {fontSizeClass === 'normal' ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
            <span className="hidden lg:inline">{fontSizeClass === 'normal' ? 'Huruf Besar' : 'Huruf Normal'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            title="Layar Penuh"
            className="p-2.5 text-[#7A6B56] hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Mode layar penuh"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Book Stage */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* COVER VIEW */}
          {isCover && (
            <div className="max-w-xl mx-auto bg-[#FFFDF9] rounded-3xl border-4 border-[#DFBE72] shadow-2xl overflow-hidden text-center relative book-paper-texture">
              {/* Gold border inset */}
              <div className="absolute inset-2 border-2 border-[#DFBE72]/40 rounded-2xl pointer-events-none" />

              {/* Cover Illustration banner */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#EFE7D8] border-b-2 border-[#DFBE72]/60">
                <SceneIllustration
                  sceneKey={book.coverSceneKey || 'kite_flying_hill'}
                  artStyle={book.artStyle}
                  title={book.title}
                  bookId={book.id}
                  isCover={true}
                  characterName={book.characterName}
                  className="w-full h-full"
                />
                {/* Vintage Left Binding Stripe */}
                <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-[#0D5C58] via-[#094542] to-transparent opacity-90 pointer-events-none" />
                <div className="absolute inset-y-0 left-4 w-[1.5px] bg-[#DFBE72] pointer-events-none" />
              </div>

              {/* Cover Details */}
              <div className="p-6 sm:p-10 relative z-10 space-y-3 sm:space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-xs font-bold text-[#D97706] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Buku Cerita Bergambar
                </span>

                <h1 className="font-child text-2xl sm:text-4xl font-bold text-[#0D5C58] leading-tight">
                  {book.title}
                </h1>

                {book.subtitle && (
                  <p className="text-xs sm:text-base text-[#615443] font-storybook italic max-w-md mx-auto leading-relaxed">
                    {book.subtitle}
                  </p>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-[#7A6B56]">
                  <span>Tokoh Utama: <strong className="text-[#1F292E]">{book.characterName}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>Karya: {book.authorName}</span>
                </div>

                <div className="pt-4 sm:pt-6">
                  <button
                    onClick={goToNextPage}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0D5C58] to-[#094542] hover:from-[#0B4B48] hover:to-[#073634] text-[#FFFDF9] rounded-2xl text-base font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 min-h-[48px]"
                  >
                    <BookOpen className="w-5 h-5 text-[#DFBE72]" />
                    <span>Mulai Membaca Cerita</span>
                    <ArrowRight className="w-5 h-5 text-[#DFBE72]" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* READING VIEW */}
          {!isCover && !isEndPage && activePage && (
            <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#EADFC9] shadow-2xl overflow-hidden book-paper-texture">
              {/* DESKTOP SPREAD (md and up: 2 columns open book) */}
              <div className="hidden md:grid md:grid-cols-2 min-h-[480px]">
                {/* LEFT PAGE: Large Illustration */}
                <div className="relative p-6 lg:p-8 flex flex-col justify-between bg-gradient-to-r from-[#FFFDF9] to-[#F7EFE1] border-r border-[#EADFC9]">
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/8 to-transparent pointer-events-none" />

                  <div className="flex items-center justify-between text-xs text-[#8F7E69] mb-3">
                    <span className="font-child font-bold text-[#0D5C58] truncate max-w-[200px]">
                      {book.title}
                    </span>
                    <span className="font-semibold">Hal. {activePage.pageNumber}</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#DFBE72]/70 shadow-md relative bg-[#EFE7D8]">
                      <SceneIllustration
                        sceneKey={activePage.sceneKey}
                        artStyle={book.artStyle}
                        title={`Ilustrasi Halaman ${activePage.pageNumber}`}
                        bookId={book.id}
                        pageNumber={activePage.pageNumber}
                        characterName={book.characterName}
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-[11px] text-[#A08E77] italic font-storybook">
                      Ilustrasi {book.artStyle} · Halaman {activePage.pageNumber}
                    </span>
                  </div>
                </div>

                {/* RIGHT PAGE: Story Text */}
                <div className="relative p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-l from-[#FFFDF9] to-[#FAF4E8]">
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/8 to-transparent pointer-events-none" />

                  <div className="flex items-center justify-between text-xs text-[#8F7E69] mb-6">
                    <span className="tracking-widest uppercase font-bold text-[#C59B27]">
                      CeritaKita
                    </span>
                    <span className="font-medium">
                      Halaman {activePage.pageNumber} dari {totalPages}
                    </span>
                  </div>

                  {/* Story Text with Drop Cap */}
                  <div className="flex-1 flex items-center">
                    <div className="w-full">
                      <p
                        className={`font-storybook text-[#1F292E] select-text ${
                          fontSizeClass === 'large'
                            ? 'text-xl lg:text-2xl leading-loose'
                            : 'text-base sm:text-lg lg:text-xl leading-relaxed'
                        }`}
                      >
                        <span className="float-left text-4xl sm:text-5xl font-heading font-bold text-[#0D5C58] pr-2.5 pb-1 leading-none">
                          {activePage.text.charAt(0)}
                        </span>
                        {activePage.text.slice(1)}
                      </p>
                    </div>
                  </div>

                  {/* Page Footer Navigation */}
                  <div className="mt-8 pt-4 border-t border-[#E8DFC8] flex items-center justify-between">
                    <button
                      onClick={goToPrevPage}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A6B56] hover:text-[#0D5C58] cursor-pointer min-h-[44px]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Sebelumnya</span>
                    </button>

                    <span className="text-xs font-bold text-[#0D5C58]">
                      ~ {activePage.pageNumber} ~
                    </span>

                    <button
                      onClick={goToNextPage}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D5C58] hover:text-[#083D3A] cursor-pointer min-h-[44px]"
                    >
                      <span>Berikutnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* MOBILE SINGLE PAGE VIEW (< md screens: stacked comfortably) */}
              <div className="md:hidden p-4 sm:p-6 space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between text-xs text-[#8F7E69]">
                  <span className="font-child font-bold text-[#0D5C58] truncate max-w-[200px]">
                    {book.title}
                  </span>
                  <span className="font-bold bg-[#EAF5F3] text-[#0D5C58] px-2.5 py-0.5 rounded-full">
                    {activePage.pageNumber} / {totalPages}
                  </span>
                </div>

                {/* Large Illustration on top */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#DFBE72]/70 shadow-sm relative bg-[#EFE7D8]">
                  <SceneIllustration
                    sceneKey={activePage.sceneKey}
                    artStyle={book.artStyle}
                    title={`Ilustrasi Halaman ${activePage.pageNumber}`}
                    bookId={book.id}
                    pageNumber={activePage.pageNumber}
                    characterName={book.characterName}
                    className="w-full h-full"
                  />
                </div>

                {/* Story text below */}
                <div className="py-2">
                  <p
                    className={`font-storybook text-[#1F292E] select-text leading-relaxed ${
                      fontSizeClass === 'large' ? 'text-lg leading-loose' : 'text-base leading-relaxed'
                    }`}
                  >
                    <span className="float-left text-3xl font-heading font-bold text-[#0D5C58] pr-2 pb-0.5 leading-none">
                      {activePage.text.charAt(0)}
                    </span>
                    {activePage.text.slice(1)}
                  </p>
                </div>

                {/* Mobile Prev / Next Buttons */}
                <div className="pt-2 border-t border-[#E8DFC8] grid grid-cols-2 gap-3">
                  <button
                    onClick={goToPrevPage}
                    className="w-full py-3 px-4 rounded-xl border border-[#D5C9B3] bg-[#FFFDF9] text-xs font-bold text-[#615443] flex items-center justify-center gap-1.5 min-h-[48px] active:bg-[#F3EBDD]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </button>

                  <button
                    onClick={goToNextPage}
                    className="w-full py-3 px-4 rounded-xl bg-[#0D5C58] text-[#FFFDF9] text-xs font-bold flex items-center justify-center gap-1.5 min-h-[48px] active:bg-[#083D3A] shadow-sm"
                  >
                    <span>Selanjutnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* END PAGE / CELEBRATION */}
          {isEndPage && (
            <div className="max-w-xl mx-auto bg-[#FFFDF9] rounded-3xl border-4 border-[#DFBE72] shadow-2xl p-6 sm:p-12 text-center space-y-5 book-paper-texture">
              <div className="w-16 h-16 rounded-3xl bg-[#E5F2F0] text-[#0D5C58] mx-auto flex items-center justify-center shadow-xs">
                <Heart className="w-8 h-8 fill-[#0D5C58]" />
              </div>

              <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase block">
                Tamat
              </span>

              <h2 className="font-child text-2xl sm:text-4xl font-bold text-[#0D5C58]">
                Cerita yang Sungguh Indah!
              </h2>

              <p className="text-sm sm:text-base text-[#615443] font-storybook italic max-w-md mx-auto leading-relaxed">
                Kamu telah menyelesaikan petualangan bersama <strong>{book.characterName}</strong> dalam buku "{book.title}".
              </p>

              {book.moralValue && (
                <div className="p-4 rounded-2xl bg-[#F7F2E7] border border-[#E8DFC8] text-xs sm:text-sm text-[#4E3F2E] max-w-md mx-auto text-left">
                  <strong className="text-[#0D5C58] block mb-1 font-bold">Pesan Budi Pekerti:</strong>
                  <span className="font-storybook">{book.moralValue}</span>
                </div>
              )}

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setCurrentPageIndex(-1)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFFDF9] hover:bg-[#F3EBDD] text-[#0D5C58] border-2 border-[#0D5C58] rounded-2xl text-xs sm:text-sm font-bold transition-colors cursor-pointer min-h-[48px]"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Baca Ulang dari Sampul</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-2xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer min-h-[48px]"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Kembali ke Rak Buku</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Floating Narration & Audio Control Bar */}
      <footer className="px-3 sm:px-6 py-3 bg-[#FFFDF9]/95 border-t border-[#EADFC9] shadow-lg shrink-0 flex flex-wrap items-center justify-between gap-3">
        {/* Page progress indicators */}
        <div className="flex items-center gap-3 text-xs text-[#7A6B56]">
          <span className="font-bold text-[#1F292E]">
            {isCover
              ? 'Sampul Buku'
              : isEndPage
              ? 'Halaman Tamat'
              : `Hal. ${activePage?.pageNumber} dari ${totalPages}`}
          </span>

          {/* Dots progress indicator */}
          <div className="hidden sm:flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full ${
                currentPageIndex === -1 ? 'bg-[#0D5C58]' : 'bg-[#DCD0B9]'
              }`}
            />
            {book.pages.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPageIndex === idx ? 'w-4 bg-[#0D5C58]' : 'bg-[#DCD0B9]'
                }`}
              />
            ))}
            <span
              className={`w-2 h-2 rounded-full ${
                currentPageIndex === totalPages ? 'bg-[#0D5C58]' : 'bg-[#DCD0B9]'
              }`}
            />
          </div>
        </div>

        {/* Audio Narration Controls */}
        <div className="flex items-center gap-2">
          {narrationState.errorMessage ? (
            <span className="text-xs text-red-600 font-medium">
              {narrationState.errorMessage}
            </span>
          ) : (
            <>
              {/* Play / Pause / Resume */}
              {!narrationState.isPlaying ? (
                <button
                  onClick={handlePlayNarration}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer min-h-[44px]"
                  aria-label="Bacakan halaman ini dengan suara"
                >
                  <Play className="w-4 h-4 fill-[#FFFDF9]" />
                  <span>{narrationState.isPaused ? 'Lanjut Suara' : 'Bacakan Suara'}</span>
                </button>
              ) : (
                <button
                  onClick={handlePauseNarration}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-[#FFFDF9] rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer min-h-[44px]"
                  aria-label="Jeda suara pembacaan"
                >
                  <Pause className="w-4 h-4" />
                  <span>Jeda Suara</span>
                </button>
              )}

              {(narrationState.isPlaying || narrationState.isPaused) && (
                <button
                  onClick={handleStopNarration}
                  title="Hentikan Suara"
                  className="p-2.5 text-xs text-[#7A6B56] hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Hentikan suara"
                >
                  <Square className="w-4 h-4" />
                </button>
              )}

              {/* Speed rate button */}
              <button
                onClick={handleToggleRate}
                title="Atur Kecepatan Suara"
                className="px-2.5 py-2 text-xs font-bold text-[#7A6B56] hover:text-[#0D5C58] bg-[#F7F2E7] rounded-xl transition-colors cursor-pointer min-h-[44px]"
              >
                {narrationState.rate}x
              </button>

              {/* Active Soundwave Pulse Indicator */}
              {narrationState.isPlaying && (
                <span className="flex items-center gap-1 ml-1" title="Sedang bersuara">
                  <span className="w-1.5 h-3.5 bg-[#0D5C58] animate-pulse rounded-full" />
                  <span className="w-1.5 h-5 bg-[#0D5C58] animate-pulse rounded-full delay-100" />
                  <span className="w-1.5 h-2.5 bg-[#0D5C58] animate-pulse rounded-full delay-200" />
                </span>
              )}
            </>
          )}
        </div>

        {/* Desktop Prev / Next controls in footer */}
        <div className="hidden sm:flex items-center gap-1">
          <button
            disabled={currentPageIndex <= -1}
            onClick={goToPrevPage}
            className="p-2.5 text-xs font-bold text-[#615443] hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-xl transition-colors disabled:opacity-30 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Halaman Sebelumnya (Panah Kiri)"
            aria-label="Halaman sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            disabled={currentPageIndex >= totalPages}
            onClick={goToNextPage}
            className="p-2.5 text-xs font-bold text-[#0D5C58] hover:bg-[#F3EBDD] rounded-xl transition-colors disabled:opacity-30 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Halaman Berikutnya (Panah Kanan)"
            aria-label="Halaman berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
};
