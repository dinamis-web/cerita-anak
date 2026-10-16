import React, { useState } from 'react';
import { BookOpen, Edit3, Copy, Trash2, User, Clock, AlertTriangle } from 'lucide-react';
import { Book } from '../types';
import { SceneIllustration } from './illustrations/SceneIllustration';

interface BookCardProps {
  book: Book;
  onRead: (book: Book) => void;
  onEdit: (book: Book) => void;
  onDuplicate: (book: Book) => void;
  onDelete: (id: string) => void;
}

const genreMeta: Record<string, { label: string; bg: string; text: string }> = {
  adventure: { label: 'Petualangan', bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-800' },
  friendship: { label: 'Persahabatan', bg: 'bg-amber-50 border-amber-200', text: 'text-amber-800' },
  bedtime: { label: 'Pengantar Tidur', bg: 'bg-indigo-50 border-indigo-200', text: 'text-indigo-800' },
  educational: { label: 'Edukasi & Sains', bg: 'bg-sky-50 border-sky-200', text: 'text-sky-800' },
  moral_values: { label: 'Nilai Moral', bg: 'bg-orange-50 border-orange-200', text: 'text-orange-800' },
  fantasy: { label: 'Dongeng Fantasi', bg: 'bg-purple-50 border-purple-200', text: 'text-purple-800' },
};

export const BookCard: React.FC<BookCardProps> = ({
  book,
  onRead,
  onEdit,
  onDuplicate,
  onDelete,
}) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const genre = genreMeta[book.genre] || {
    label: 'Cerita Anak',
    bg: 'bg-stone-50 border-stone-200',
    text: 'text-stone-800',
  };

  // Estimate reading time: ~1 minute per 2 pages for children picture books
  const readingTime = Math.max(3, Math.round(book.pages.length * 0.7));

  return (
    <div className="group relative bg-[#FFFDF9] rounded-3xl border border-[#EADFC9] hover:border-[#DFBE72] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Cover Artwork Header */}
        <div className="relative aspect-[16/10] w-full bg-[#EFE8DA] overflow-hidden border-b border-[#EADFC9]">
          <SceneIllustration
            sceneKey={book.coverSceneKey || 'morning_garden'}
            artStyle={book.artStyle}
            title={book.title}
            bookId={book.id}
            isCover={true}
            characterName={book.characterName}
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          />

          {/* Picture-book spine fold styling */}
          <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-[#0D5C58]/75 via-[#0D5C58]/30 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-3 w-[1px] bg-[#DFBE72]/80 pointer-events-none" />

          {/* Genre & Reading Time Badges floating on cover */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-xs shadow-xs ${genre.bg} ${genre.text}`}
            >
              {genre.label}
            </span>
          </div>

          <div className="absolute bottom-2.5 left-4 z-10 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/40 text-white backdrop-blur-xs text-[11px] font-medium">
            <Clock className="w-3 h-3 text-[#FDE68A]" />
            <span>~{readingTime} mnt baca</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-2">
          {/* Metadata info */}
          <div className="flex items-center gap-2 text-xs text-[#8C7A62]">
            <span>Usia {book.targetAge} thn</span>
            <span aria-hidden="true">·</span>
            <span>{book.pages.length} Halaman</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize">{book.artStyle}</span>
          </div>

          {/* Book Title */}
          <h3 className="font-heading text-lg font-bold text-[#1F292E] group-hover:text-[#0D5C58] transition-colors leading-snug line-clamp-2">
            {book.title}
          </h3>

          {/* Subtitle / Synopsis */}
          <p className="text-xs text-[#615443] line-clamp-2 font-storybook leading-relaxed">
            {book.synopsis || book.subtitle || 'Kisah bergambar penuh kehangatan dan pesan budi pekerti.'}
          </p>

          {/* Character indication */}
          <div className="pt-1 flex items-center gap-1.5 text-xs text-[#7A6B56]">
            <User className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
            <span className="truncate">
              Tokoh: <strong className="text-[#332A20] font-semibold">{book.characterName}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-4 pt-2 border-t border-[#F2E9DA] bg-[#FDFBF7]/60">
        {showConfirmDelete ? (
          <div className="p-3 bg-red-50 border border-red-200 rounded-2xl space-y-2 text-xs animate-fade-in">
            <div className="flex items-center gap-1.5 text-red-800 font-bold">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Hapus cerita ini?</span>
            </div>
            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowConfirmDelete(false)}
                className="px-3 py-1.5 text-xs text-[#7A6B56] hover:bg-red-100/60 rounded-xl transition-colors cursor-pointer min-h-[36px]"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmDelete(false);
                  onDelete(book.id);
                }}
                className="px-3.5 py-1.5 text-xs font-bold bg-red-700 text-white rounded-xl hover:bg-red-800 transition-colors cursor-pointer shadow-xs min-h-[36px]"
              >
                Hapus
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => onRead(book)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all cursor-pointer min-h-[44px]"
            >
              <BookOpen className="w-4 h-4 text-[#DFBE72]" />
              <span>Baca Cerita</span>
            </button>

            <div className="flex items-center gap-1 text-[#7A6B56]">
              <button
                onClick={() => onEdit(book)}
                title="Edit Cerita & Halaman"
                className="p-2.5 hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={`Edit buku ${book.title}`}
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDuplicate(book)}
                title="Duplikat Buku"
                className="p-2.5 hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={`Duplikat buku ${book.title}`}
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowConfirmDelete(true)}
                title="Hapus Buku"
                className="p-2.5 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={`Hapus buku ${book.title}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
