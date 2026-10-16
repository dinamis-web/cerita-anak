import React, { useState } from 'react';
import {
  Book,
  BookPage,
  SceneKey,
} from '../types';
import { aiManager, RevisionActionType } from '../services/ai';
import { SceneIllustration } from './illustrations/SceneIllustration';
import {
  Save,
  BookOpen,
  Copy,
  RotateCcw,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Check,
  X,
  Palette,
  FileText,
  AlertTriangle,
  Send,
} from 'lucide-react';

interface StoryEditorProps {
  book: Book;
  onSaveBook: (updatedBook: Book) => void;
  onDuplicateBook: (book: Book) => void;
  onPreviewBook: (book: Book) => void;
  onBackToLibrary: () => void;
}

const sceneKeyOptions: { key: SceneKey; label: string }[] = [
  { key: 'morning_garden', label: 'Pagi di Kebun / Rumah' },
  { key: 'kite_flying_hill', label: 'Menerbangkan Layang-layang di Bukit' },
  { key: 'grandmother_porch', label: 'Beranda Santai & Minum Teh' },
  { key: 'starlit_night', label: 'Langit Malam & Gugusan Bintang' },
  { key: 'friendly_forest', label: 'Hutan Tropis & Kancil Ramah' },
  { key: 'rainbow_rain', label: 'Pelangi Indah Usai Hujan' },
  { key: 'bedtime_cozy', label: 'Kamar Tidur Nyaman' },
  { key: 'celebration_hug', label: 'Perayaan Ceria & Senyuman' },
  { key: 'village_path', label: 'Jalan Setapak Desa Asri' },
];

export const StoryEditor: React.FC<StoryEditorProps> = ({
  book,
  onSaveBook,
  onDuplicateBook,
  onPreviewBook,
  onBackToLibrary,
}) => {
  // Local working copy of the book
  const [workingBook, setWorkingBook] = useState<Book>(() => JSON.parse(JSON.stringify(book)));
  const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [pageToDeleteIndex, setPageToDeleteIndex] = useState<number | null>(null);
  const [showSaveToast, setShowSaveToast] = useState<boolean>(false);
  const [customPromptText, setCustomPromptText] = useState<string>('');
  const [isRevising, setIsRevising] = useState<boolean>(false);

  // AI Assistant simulation state
  const [assistantSuggestion, setAssistantSuggestion] = useState<{
    revisedText: string;
    explanation: string;
    suggestedSceneKey?: SceneKey;
    actionLabel: string;
  } | null>(null);

  const currentPage = workingBook.pages[selectedPageIndex] || workingBook.pages[0];

  // Modify current page text
  const handleUpdatePageText = (newText: string) => {
    const updatedPages = [...workingBook.pages];
    updatedPages[selectedPageIndex] = {
      ...currentPage,
      text: newText,
    };
    setWorkingBook({ ...workingBook, pages: updatedPages });
    setHasUnsavedChanges(true);
  };

  // Modify current page scene illustration
  const handleUpdatePageScene = (sceneKey: SceneKey) => {
    const updatedPages = [...workingBook.pages];
    updatedPages[selectedPageIndex] = {
      ...currentPage,
      sceneKey,
    };
    setWorkingBook({ ...workingBook, pages: updatedPages });
    setHasUnsavedChanges(true);
  };

  // Add new page
  const handleAddPage = () => {
    if (workingBook.pages.length >= 16) {
      alert('Batas maksimal buku adalah 16 halaman agar tetap nyaman dibaca si kecil.');
      return;
    }
    const newPageNumber = workingBook.pages.length + 1;
    const newPage: BookPage = {
      id: `p-${Date.now()}-${newPageNumber}`,
      pageNumber: newPageNumber,
      text: `Petualangan ${workingBook.characterName} berlanjut dengan ceria dan penuh kejutan...`,
      sceneKey: 'morning_garden',
    };
    setWorkingBook({
      ...workingBook,
      pages: [...workingBook.pages, newPage],
    });
    setSelectedPageIndex(workingBook.pages.length);
    setHasUnsavedChanges(true);
  };

  // Remove page with safe in-app confirmation
  const executeDeletePage = (index: number) => {
    if (workingBook.pages.length <= 4) {
      alert('Buku cerita membutuhkan minimal 4 halaman.');
      setPageToDeleteIndex(null);
      return;
    }

    const updatedPages = workingBook.pages
      .filter((_, idx) => idx !== index)
      .map((p, idx) => ({ ...p, pageNumber: idx + 1 }));

    setWorkingBook({ ...workingBook, pages: updatedPages });
    setSelectedPageIndex(Math.max(0, index - 1));
    setHasUnsavedChanges(true);
    setPageToDeleteIndex(null);
  };

  // Move page up
  const handleMovePageUp = (index: number) => {
    if (index === 0) return;
    const updatedPages = [...workingBook.pages];
    const temp = updatedPages[index - 1];
    updatedPages[index - 1] = updatedPages[index];
    updatedPages[index] = temp;
    const renumbered = updatedPages.map((p, idx) => ({ ...p, pageNumber: idx + 1 }));
    setWorkingBook({ ...workingBook, pages: renumbered });
    setSelectedPageIndex(index - 1);
    setHasUnsavedChanges(true);
  };

  // Move page down
  const handleMovePageDown = (index: number) => {
    if (index >= workingBook.pages.length - 1) return;
    const updatedPages = [...workingBook.pages];
    const temp = updatedPages[index + 1];
    updatedPages[index + 1] = updatedPages[index];
    updatedPages[index] = temp;
    const renumbered = updatedPages.map((p, idx) => ({ ...p, pageNumber: idx + 1 }));
    setWorkingBook({ ...workingBook, pages: renumbered });
    setSelectedPageIndex(index + 1);
    setHasUnsavedChanges(true);
  };

  // Save Book
  const handleSave = () => {
    onSaveBook(workingBook);
    setHasUnsavedChanges(false);
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  // Reset to last saved state
  const handleResetConfirm = () => {
    setWorkingBook(JSON.parse(JSON.stringify(book)));
    setHasUnsavedChanges(false);
    setShowResetConfirm(false);
    setAssistantSuggestion(null);
  };

  // Run Revision via AI Manager Service
  const runAssistantAction = async (actionType: RevisionActionType, customPrompt?: string) => {
    setIsRevising(true);
    try {
      const result = await aiManager.getRevisionService().revisePage({
        currentPageText: currentPage.text,
        pageNumber: currentPage.pageNumber,
        totalPageCount: workingBook.pages.length,
        character: {
          name: workingBook.characterName,
          age: 6,
          personality: 'Ramah dan ceria',
          favoriteThings: 'buku cerita',
        },
        bookGenre: workingBook.genre,
        targetAge: workingBook.targetAge,
        actionType,
        customPrompt,
      });

      setAssistantSuggestion({
        revisedText: result.revisedText,
        explanation: result.explanation,
        suggestedSceneKey: result.suggestedSceneKey,
        actionLabel: customPrompt ? `Arahan: "${customPrompt}"` : actionType,
      });
      setIsRevising(false);
    } catch {
      setIsRevising(false);
    }
  };

  const applyAssistantSuggestion = () => {
    if (assistantSuggestion) {
      handleUpdatePageText(assistantSuggestion.revisedText);
      if (assistantSuggestion.suggestedSceneKey) {
        handleUpdatePageScene(assistantSuggestion.suggestedSceneKey);
      }
      setAssistantSuggestion(null);
    }
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6 overflow-x-hidden">
      {/* Editor Top Bar */}
      <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#EADFC9] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#7A6B56]">
            <button
              onClick={onBackToLibrary}
              className="hover:text-[#0D5C58] underline cursor-pointer"
            >
              ← Kembali ke Koleksi
            </button>
            <span aria-hidden="true">·</span>
            <span>Studio Penyunting Cerita</span>
            {hasUnsavedChanges && (
              <span className="text-amber-800 font-semibold">
                (Ada perubahan belum disimpan)
              </span>
            )}
          </div>
          <h1 className="font-heading text-xl sm:text-2xl font-bold text-[#1F292E] mt-0.5 truncate max-w-xl">
            {workingBook.title}
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {hasUnsavedChanges && (
            <button
              onClick={() => setShowResetConfirm(true)}
              title="Batalkan perubahan yang belum disimpan"
              className="p-2 text-xs text-[#7A6B56] hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Batal Ubah</span>
            </button>
          )}

          <button
            onClick={() => onDuplicateBook(workingBook)}
            title="Duplikat buku ini"
            className="p-2 text-xs text-[#7A6B56] hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-lg transition-colors cursor-pointer flex items-center gap-1"
          >
            <Copy className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Duplikat</span>
          </button>

          <button
            onClick={() => onPreviewBook(workingBook)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFFDF9] hover:bg-[#F3EBDD] text-[#0D5C58] border border-[#0D5C58] rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Baca Buku</span>
          </button>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-xl text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Simpan</span>
          </button>
        </div>
      </div>

      {showSaveToast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 animate-fade-in">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Perubahan buku cerita berhasil disimpan ke browser!</span>
        </div>
      )}

      {/* Confirmation Modal for Reset Changes */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-2xl border border-[#EADFC9] p-6 max-w-md w-full space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>Konfirmasi Batal Perubahan</span>
            </div>
            <p className="text-xs text-[#615443] leading-relaxed">
              Apakah kamu yakin ingin membatalkan semua perubahan yang belum disimpan pada buku ini? Data yang belum disimpan akan dikembalikan seperti semula.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-xs font-medium text-[#7A6B56] hover:bg-[#F3EBDD] rounded-lg cursor-pointer"
              >
                Tetap Lanjut Mengedit
              </button>
              <button
                onClick={handleResetConfirm}
                className="px-4 py-2 text-xs font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
              >
                Ya, Batalkan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal for Page Deletion */}
      {pageToDeleteIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-2xl border border-[#EADFC9] p-6 max-w-md w-full space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>Hapus Halaman {pageToDeleteIndex + 1}?</span>
            </div>
            <p className="text-xs text-[#615443] leading-relaxed">
              Halaman ini akan dihapus permanen dari buku cerita. Sisa halaman lainnya akan diberi nomor urut baru secara otomatis.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setPageToDeleteIndex(null)}
                className="px-4 py-2 text-xs font-medium text-[#7A6B56] hover:bg-[#F3EBDD] rounded-lg cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={() => executeDeletePage(pageToDeleteIndex)}
                className="px-4 py-2 text-xs font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
              >
                Ya, Hapus Halaman
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Page Navigator Selector */}
      <div className="lg:hidden bg-[#FFFDF9] rounded-2xl border border-[#EADFC9] p-3 flex items-center justify-between gap-2">
        <label className="text-xs font-bold text-[#1F292E] shrink-0">Pilih Halaman:</label>
        <select
          value={selectedPageIndex}
          onChange={(e) => setSelectedPageIndex(Number(e.target.value))}
          className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-[#D5C9B3] bg-[#FDFCF8] text-[#1F292E] focus:outline-none"
        >
          {workingBook.pages.map((p, idx) => (
            <option key={p.id} value={idx}>
              Halaman {p.pageNumber}: {p.text.slice(0, 30)}...
            </option>
          ))}
        </select>
        <button
          onClick={handleAddPage}
          className="px-2.5 py-1.5 bg-[#0D5C58] text-[#FFFDF9] rounded-lg text-xs font-semibold shrink-0"
        >
          + Hal
        </button>
      </div>

      {/* Main Workspace: Sidebar on left (Desktop), Active Page Center/Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Desktop Sidebar: Page Thumbnails */}
        <div className="hidden lg:block lg:col-span-3 bg-[#FFFDF9] rounded-2xl border border-[#EADFC9] p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0E6D5]">
            <span className="text-xs font-bold text-[#1F292E]">
              Daftar Halaman ({workingBook.pages.length})
            </span>
            <button
              onClick={handleAddPage}
              className="text-xs font-semibold text-[#0D5C58] hover:text-[#083D3A] flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Halaman</span>
            </button>
          </div>

          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
            {workingBook.pages.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => setSelectedPageIndex(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                  selectedPageIndex === idx
                    ? 'border-[#0D5C58] bg-[#F1F8F7] shadow-xs'
                    : 'border-[#EAE0CD] bg-[#FDFCF8] hover:border-[#0D5C58]/50'
                }`}
              >
                <div className="w-12 h-10 rounded-lg overflow-hidden border border-[#D5C9B3] bg-[#EAE0CD] shrink-0">
                  <SceneIllustration
                    sceneKey={p.sceneKey}
                    artStyle={workingBook.artStyle}
                    bookId={workingBook.id}
                    pageNumber={p.pageNumber}
                    characterName={workingBook.characterName}
                    className="w-full h-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1F292E]">
                      Hal. {p.pageNumber}
                    </span>
                    <span className="text-[10px] text-[#A08E77]">
                      {p.text.length} huruf
                    </span>
                  </div>
                  <p className="text-[11px] text-[#7A6B56] truncate mt-0.5 font-storybook">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleAddPage}
            className="w-full py-2.5 rounded-xl border border-dashed border-[#DFBE72] hover:border-[#0D5C58] bg-[#FDFBF7] text-xs font-semibold text-[#7A6B56] hover:text-[#0D5C58] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Tambah Halaman Baru</span>
          </button>
        </div>

        {/* Center & Right Column: Page Editor + AI Assistant panel */}
        <div className="lg:col-span-9 space-y-6">
          {/* Active Page Editor Card */}
          <div className="bg-[#FFFDF9] rounded-3xl border border-[#EADFC9] p-6 sm:p-8 shadow-xs space-y-6">
            {/* Page Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0E6D5] pb-4">
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl font-bold text-[#1F292E]">
                  Halaman {currentPage.pageNumber} dari {workingBook.pages.length}
                </span>
                <span className="text-xs text-[#7A6B56]">
                  · Tokoh: <strong>{workingBook.characterName}</strong>
                </span>
              </div>

              {/* Page Movement and Delete Controls */}
              <div className="flex items-center gap-1.5 text-xs text-[#7A6B56]">
                <button
                  disabled={selectedPageIndex === 0}
                  onClick={() => handleMovePageUp(selectedPageIndex)}
                  title="Pindahkan ke halaman sebelumnya"
                  className="p-1.5 hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-md transition-colors cursor-pointer disabled:opacity-30"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  disabled={selectedPageIndex >= workingBook.pages.length - 1}
                  onClick={() => handleMovePageDown(selectedPageIndex)}
                  title="Pindahkan ke halaman berikutnya"
                  className="p-1.5 hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-md transition-colors cursor-pointer disabled:opacity-30"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <span className="mx-1 text-[#DCD0B9]">|</span>
                <button
                  onClick={() => setPageToDeleteIndex(selectedPageIndex)}
                  title="Hapus Halaman Ini"
                  className="p-1.5 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split View: Illustration on Left, Text on Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Illustration Preview & Scene Selector */}
              <div className="md:col-span-5 space-y-3">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#DFBE72]/60 shadow-xs relative bg-[#EFE7D8]">
                  <SceneIllustration
                    sceneKey={currentPage.sceneKey}
                    artStyle={workingBook.artStyle}
                    title={`Ilustrasi Halaman ${currentPage.pageNumber}`}
                    bookId={workingBook.id}
                    pageNumber={currentPage.pageNumber}
                    characterName={workingBook.characterName}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-[#0D5C58]/70 to-transparent" />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#554737] mb-1">
                    Ubah Pemandangan Ilustrasi:
                  </label>
                  <select
                    value={currentPage.sceneKey}
                    onChange={(e) => handleUpdatePageScene(e.target.value as SceneKey)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#D5C9B3] bg-[#FDFCF8] text-[#1F292E] focus:outline-none focus:border-[#0D5C58]"
                  >
                    {sceneKeyOptions.map((opt) => (
                      <option key={opt.key} value={opt.key}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Text Editor Area */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#3A3025]">
                    Teks Cerita Halaman Ini:
                  </label>
                  <span className="text-[11px] text-[#7A6B56]">
                    Disarankan 20–45 kata per halaman
                  </span>
                </div>

                <textarea
                  rows={6}
                  value={currentPage.text}
                  onChange={(e) => handleUpdatePageText(e.target.value)}
                  className="w-full p-4 rounded-2xl border border-[#D5C9B3] bg-[#FFFDF9] text-sm sm:text-base text-[#1F292E] font-storybook leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0D5C58]/30 focus:border-[#0D5C58]"
                  placeholder="Ketikkan teks cerita..."
                />

                <div className="flex items-center justify-between text-[11px] text-[#7A6B56]">
                  <span>
                    Jumlah kata: {currentPage.text.trim().split(/\s+/).filter(Boolean).length}
                  </span>
                  <span>Gaya bahasa: Ramah anak & santun</span>
                </div>
              </div>
            </div>

            {/* Book Metadata Accordion / Detailed Edit */}
            <div className="pt-4 border-t border-[#F0E6D5] space-y-3">
              <span className="text-xs font-semibold text-[#7A6B56] block">
                Pengaturan Judul & Detail Informasi Buku:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-medium text-[#554737] mb-1">
                    Judul Buku
                  </label>
                  <input
                    type="text"
                    value={workingBook.title}
                    onChange={(e) => {
                      setWorkingBook({ ...workingBook, title: e.target.value });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C9B3] bg-[#FDFCF8] text-xs focus:outline-none focus:border-[#0D5C58]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#554737] mb-1">
                    Pesan Moral Utama
                  </label>
                  <input
                    type="text"
                    value={workingBook.moralValue}
                    onChange={(e) => {
                      setWorkingBook({ ...workingBook, moralValue: e.target.value });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C9B3] bg-[#FDFCF8] text-xs focus:outline-none focus:border-[#0D5C58]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#554737] mb-1">
                    Subjudul / Deskripsi Singkat
                  </label>
                  <input
                    type="text"
                    value={workingBook.subtitle || ''}
                    onChange={(e) => {
                      setWorkingBook({ ...workingBook, subtitle: e.target.value });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C9B3] bg-[#FDFCF8] text-xs focus:outline-none focus:border-[#0D5C58]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#554737] mb-1">
                    Nama Penulis / Keluarga
                  </label>
                  <input
                    type="text"
                    value={workingBook.authorName}
                    onChange={(e) => {
                      setWorkingBook({ ...workingBook, authorName: e.target.value });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C9B3] bg-[#FDFCF8] text-xs focus:outline-none focus:border-[#0D5C58]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant Integration Module (Clearly labeled prototype) */}
          <div className="bg-[#FAF6EE] rounded-3xl border border-[#E8DEC7] p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8DFC8] pb-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D5C58]">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Asisten Cerita (Integrasi Modul Revisi)</span>
                </div>
                <p className="text-xs text-[#7A6B56] mt-0.5 font-storybook">
                  Rekomendasi penyuntingan kontekstual untuk <strong>Halaman {currentPage.pageNumber}</strong>:
                </p>
              </div>

              <span className="text-[10px] font-medium bg-[#E8F3F1] text-[#0D5C58] px-2.5 py-1 rounded-full border border-[#CDE5E3] shrink-0 self-start sm:self-auto">
                Mode: Studio Lokal (Tanpa Biaya / Offline)
              </span>
            </div>

            {/* Quick interactive action suggestions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                disabled={isRevising}
                onClick={() => runAssistantAction('humor')}
                className="p-3 rounded-xl border border-[#E0D5BE] bg-[#FFFDF9] hover:border-[#0D5C58] hover:bg-[#F2F8F7] text-left transition-all cursor-pointer disabled:opacity-50"
              >
                <strong className="block text-xs text-[#1F292E]">"Buat ceritanya lebih lucu"</strong>
                <span className="text-[11px] text-[#7A6B56]">Menambahkan momen jenaka ramah anak</span>
              </button>

              <button
                type="button"
                disabled={isRevising}
                onClick={() => runAssistantAction('simplify')}
                className="p-3 rounded-xl border border-[#E0D5BE] bg-[#FFFDF9] hover:border-[#0D5C58] hover:bg-[#F2F8F7] text-left transition-all cursor-pointer disabled:opacity-50"
              >
                <strong className="block text-xs text-[#1F292E]">"Sederhanakan bahasa untuk balita"</strong>
                <span className="text-[11px] text-[#7A6B56]">Kalimat lebih pendek dan mudah dicerna</span>
              </button>

              <button
                type="button"
                disabled={isRevising}
                onClick={() => runAssistantAction('ending')}
                className="p-3 rounded-xl border border-[#E0D5BE] bg-[#FFFDF9] hover:border-[#0D5C58] hover:bg-[#F2F8F7] text-left transition-all cursor-pointer disabled:opacity-50"
              >
                <strong className="block text-xs text-[#1F292E]">"Ubah akhir cerita jadi lebih berkesan"</strong>
                <span className="text-[11px] text-[#7A6B56]">Menutup halaman dengan kehangatan</span>
              </button>

              <button
                type="button"
                disabled={isRevising}
                onClick={() => runAssistantAction('rhyme')}
                className="p-3 rounded-xl border border-[#E0D5BE] bg-[#FFFDF9] hover:border-[#0D5C58] hover:bg-[#F2F8F7] text-left transition-all cursor-pointer disabled:opacity-50"
              >
                <strong className="block text-xs text-[#1F292E]">"Bantu perbaiki rima dan keindahan kalimat"</strong>
                <span className="text-[11px] text-[#7A6B56]">Melodi bahasa puitis nusantara</span>
              </button>
            </div>

            {/* Custom revision prompt input */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={customPromptText}
                onChange={(e) => setCustomPromptText(e.target.value)}
                placeholder="Ketikkan permintaan revisi bebas, misal: Tambahkan suara gemericik air kali..."
                className="flex-1 px-3.5 py-2 rounded-xl border border-[#D5C9B3] bg-white text-xs text-[#1F292E] focus:outline-none focus:border-[#0D5C58]"
              />
              <button
                type="button"
                disabled={isRevising || !customPromptText.trim()}
                onClick={() => {
                  runAssistantAction('custom', customPromptText);
                  setCustomPromptText('');
                }}
                className="px-4 py-2 bg-[#0D5C58] text-[#FFFDF9] rounded-xl text-xs font-semibold hover:bg-[#083D3A] transition-colors disabled:opacity-50 flex items-center gap-1 cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim</span>
              </button>
            </div>

            {/* Assistant Suggestion Preview Box */}
            {assistantSuggestion && (
              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#0D5C58]/30 shadow-xs space-y-3 animate-fade-in">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#0D5C58]">
                      Hasil Revisi Halaman {currentPage.pageNumber}:
                    </span>
                    <span className="text-[11px] text-[#7A6B56]">
                      ({assistantSuggestion.actionLabel})
                    </span>
                  </div>
                  <button
                    onClick={() => setAssistantSuggestion(null)}
                    className="text-[#7A6B56] hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#1F292E] font-storybook italic leading-relaxed bg-[#F8F5EE] p-3 rounded-xl border border-[#EAE2D2]">
                  "{assistantSuggestion.revisedText}"
                </p>

                <p className="text-[11px] text-[#7A6B56]">
                  Catatan: {assistantSuggestion.explanation}
                </p>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    onClick={() => setAssistantSuggestion(null)}
                    className="px-3 py-1.5 text-xs text-[#7A6B56] hover:bg-[#F0E6D5] rounded-lg transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    onClick={applyAssistantSuggestion}
                    className="px-4 py-1.5 text-xs font-semibold bg-[#0D5C58] text-[#FFFDF9] rounded-lg hover:bg-[#083D3A] shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Terapkan ke Halaman Ini</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
