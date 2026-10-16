import React from 'react';
import {
  BookOpen,
  Sparkles,
  Users,
  Plus,
  ArrowRight,
  Heart,
  Volume2,
  Palette,
  Clock,
  Compass,
  Star,
  Smile,
  Library,
} from 'lucide-react';
import { Book, Character, ActiveView } from '../types';
import { BookCard } from './BookCard';
import { CharacterAvatar } from './illustrations/CharacterAvatar';
import { SceneIllustration } from './illustrations/SceneIllustration';
import { HeroStoryIllustration } from './illustrations/HeroStoryIllustration';
import { EmptyLibraryIllustration } from './illustrations/emptyStates/EmptyLibraryIllustration';

interface HomeDashboardProps {
  books: Book[];
  characters: Character[];
  onNavigate: (view: ActiveView) => void;
  onReadBook: (book: Book) => void;
  onEditBook: (book: Book) => void;
  onDuplicateBook: (book: Book) => void;
  onDeleteBook: (id: string) => void;
  onSelectCharacter: (char: Character) => void;
  onCreateCharacter: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  books,
  characters,
  onNavigate,
  onReadBook,
  onEditBook,
  onDuplicateBook,
  onDeleteBook,
  onSelectCharacter,
  onCreateCharacter,
}) => {
  const featuredBook = books.find((b) => b.isFeatured) || books[0];
  const featuredReadingTime = featuredBook
    ? Math.max(3, Math.round(featuredBook.pages.length * 0.7))
    : 4;

  const handleScrollToCollection = () => {
    const el = document.getElementById('koleksi-buku');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 md:space-y-20 py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-x-hidden">
      {/* 1. HERO SECTION (Desktop 2-column balanced, Mobile stacked) */}
      <section className="relative rounded-3xl bg-gradient-to-br from-[#FEF9EE] via-[#FFFDF9] to-[#E8F5F2] border-2 border-[#EADFC9] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
        {/* Floating playful background accents */}
        <div className="absolute top-4 left-6 text-[#FBBF24]/60 pointer-events-none">
          <Star className="w-6 h-6 fill-[#FBBF24]/30" />
        </div>
        <div className="absolute top-12 right-12 text-[#FF8585]/50 pointer-events-none hidden sm:block">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Hero Text Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2F0] border border-[#BCE2DC] text-xs font-bold text-[#0D5C58]">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Studio Buku Cerita Anak Indonesia</span>
            </div>

            <h1 className="font-child text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F292E] tracking-tight leading-[1.2]">
              Cerita Hebat, Dibuat Bersama Si Kecil!
            </h1>

            <p className="text-base sm:text-lg text-[#615443] leading-relaxed max-w-xl mx-auto lg:mx-0 font-storybook">
              Buat cerita ajaib dengan tokoh pilihanmu, ilustrasi indah, dan kisah yang bisa dibaca bersama sebelum tidur.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('wizard')}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-2xl text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[48px] group"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                <span>Buat Cerita Baru</span>
              </button>

              <button
                onClick={handleScrollToCollection}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-[#FFFDF9] hover:bg-[#F3EBDD] text-[#3A3025] border-2 border-[#DCD0B9] hover:border-[#0D5C58] rounded-2xl text-base font-bold shadow-xs transition-colors cursor-pointer min-h-[48px]"
              >
                <BookOpen className="w-5 h-5 text-[#C59B27]" />
                <span>Jelajahi Cerita</span>
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#7A6B56] font-medium">
              <span className="flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-[#0D5C58]" />
                100% Ramah Anak
              </span>
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-[#D97706]" />
                Narasi Suara Bahasa Indonesia
              </span>
              <span className="flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-[#2563EB]" />
                Ilustrasi Vektor Indah
              </span>
            </div>
          </div>

          {/* Hero Illustration Column */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroStoryIllustration className="w-full" />
          </div>
        </div>
      </section>

      {/* 2. FEATURED STORY CARD (Visual Children's Picture Book Feature) */}
      {featuredBook && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                <Star className="w-4 h-4 fill-[#D97706]" />
              </div>
              <div>
                <h2 className="font-child text-2xl font-bold text-[#1F292E]">
                  Buku Pilihan Hari Ini
                </h2>
                <p className="text-xs text-[#7A6B56]">
                  Cerita istimewa yang paling disukai si kecil.
                </p>
              </div>
            </div>

            <button
              onClick={() => onReadBook(featuredBook)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#0D5C58] hover:text-[#083D3A] cursor-pointer"
            >
              <span>Buka Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#EADFC9] hover:border-[#DFBE72] p-5 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Large Featured Artwork */}
              <div className="md:col-span-5 lg:col-span-5 relative group">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#DFBE72]/80 shadow-md relative bg-[#EFE7D8]">
                  <SceneIllustration
                    sceneKey={featuredBook.coverSceneKey || 'kite_flying_hill'}
                    artStyle={featuredBook.artStyle}
                    title={featuredBook.title}
                    bookId={featuredBook.id}
                    isCover={true}
                    characterName={featuredBook.characterName}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Decorative gold embossed border line */}
                  <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#0D5C58]/85 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-3 w-[1.5px] bg-[#DFBE72] pointer-events-none" />
                </div>
              </div>

              {/* Featured Details */}
              <div className="md:col-span-7 lg:col-span-7 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#8C7A62] mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#E5F2F0] text-[#0D5C58] border border-[#BCE2DC]">
                      {featuredBook.genre === 'adventure'
                        ? 'Petualangan Ceria'
                        : featuredBook.genre === 'bedtime'
                        ? 'Pengantar Tidur'
                        : 'Nilai Budi Pekerti'}
                    </span>
                    <span className="flex items-center gap-1 text-[#615443]">
                      <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                      ~{featuredReadingTime} menit baca
                    </span>
                    <span>·</span>
                    <span>Usia {featuredBook.targetAge} thn</span>
                    <span>·</span>
                    <span>{featuredBook.pages.length} Halaman</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1F292E] leading-snug">
                    {featuredBook.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-[#615443] font-storybook leading-relaxed">
                    {featuredBook.synopsis || featuredBook.subtitle}
                  </p>

                  {/* Moral value box */}
                  {featuredBook.moralValue && (
                    <div className="mt-4 p-3.5 rounded-2xl bg-[#F8F4EC] border border-[#E8DEC7] text-xs text-[#524535]">
                      <strong className="text-[#0D5C58] font-bold block mb-0.5">
                        Pesan Hangat Cerita:
                      </strong>
                      <span className="font-storybook">{featuredBook.moralValue}</span>
                    </div>
                  )}

                  <div className="mt-3 text-xs text-[#7A6B56]">
                    Tokoh Utama: <strong className="text-[#2C231A] font-bold">{featuredBook.characterName}</strong>
                    <span className="mx-2">·</span>
                    Penulis: <span className="font-medium">{featuredBook.authorName}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onReadBook(featuredBook)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-2xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[48px]"
                  >
                    <BookOpen className="w-4 h-4 text-[#DFBE72]" />
                    <span>Baca Cerita Ini</span>
                  </button>

                  <button
                    onClick={() => onEditBook(featuredBook)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FFFDF9] hover:bg-[#F3EBDD] text-[#4A3D2F] border-2 border-[#DCD0B9] rounded-2xl text-sm font-semibold transition-colors cursor-pointer min-h-[48px]"
                  >
                    <span>Edit Cerita</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CHARACTER STUDIO SECTION (Large inviting character cards) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-child text-2xl font-bold text-[#1F292E]">
                Keluarga Tokoh Si Kecil
              </h2>
              <p className="text-xs text-[#7A6B56]">
                Karakter yang dapat kamu hadirkan berulang kali di berbagai petualangan baru.
              </p>
            </div>
          </div>

          <button
            onClick={onCreateCharacter}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D5C58] hover:text-[#083D3A] cursor-pointer min-h-[44px] py-1"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Rancang Tokoh Baru</span>
            <span className="sm:hidden">Tambah</span>
          </button>
        </div>

        {/* Responsive Character Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {characters.map((char) => (
            <div
              key={char.id}
              onClick={() => onSelectCharacter(char)}
              className="group bg-[#FFFDF9] rounded-3xl border-2 border-[#EADFC9] hover:border-[#0D5C58] p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectCharacter(char);
              }}
              aria-label={`Pilih tokoh ${char.name}`}
            >
              <div className="flex items-center gap-3.5">
                <CharacterAvatar character={char} size="md" />
                <div className="min-w-0 flex-1">
                  <h4 className="font-child text-lg font-bold text-[#1F292E] group-hover:text-[#0D5C58] transition-colors truncate">
                    {char.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#0D5C58]">
                    {char.role} · {char.age} thn
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-[#615443] font-storybook italic line-clamp-2 leading-relaxed">
                "{char.personality}"
              </p>

              <div className="mt-4 pt-3 border-t border-[#F2E8D7] flex items-center justify-between text-xs text-[#8C7A62]">
                <span className="truncate text-[11px]">Hobi: {char.favoriteThings || '-'}</span>
                <span className="font-bold text-[#0D5C58] group-hover:underline text-[11px] shrink-0">
                  Edit Tokoh →
                </span>
              </div>
            </div>
          ))}

          {/* Dedicated "Buat Tokoh Baru" Card */}
          <button
            type="button"
            onClick={onCreateCharacter}
            className="rounded-3xl border-2 border-dashed border-[#DFBE72] hover:border-[#0D5C58] bg-[#FFFDF9]/80 hover:bg-[#FAF4E8] p-6 flex flex-col items-center justify-center text-center gap-2.5 transition-all cursor-pointer min-h-[160px] group shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] group-hover:bg-[#0D5C58] group-hover:text-[#FFFDF9] transition-colors flex items-center justify-center">
              <Plus className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-child text-base font-bold text-[#1F292E] group-hover:text-[#0D5C58] block">
                Buat Tokoh Baru
              </span>
              <span className="text-xs text-[#8C7A62] block mt-0.5">
                Pilih busana, gaya rambut, & sifat
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* 4. STORY LIBRARY / BOOKSHELF (Responsive 4/3/2/1 Column Bookshelf Grid) */}
      <section id="koleksi-buku" className="space-y-6 pt-4">
        {/* Bookshelf Header */}
        <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-[#F7EFE1] via-[#FAF4E8] to-[#F1E8D9] border-2 border-[#E0D3BC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0D5C58] text-[#DFBE72] flex items-center justify-center shadow-xs">
              <Library className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-child text-2xl font-bold text-[#1F292E]">
                Rak Buku Cerita Kita
              </h2>
              <p className="text-xs text-[#7A6B56]">
                Koleksi buku dongeng bergambar yang siap dibaca kapan saja.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#0D5C58] bg-[#FFFDF9] px-3.5 py-1.5 rounded-full border border-[#D5C9B3] shadow-xs">
              Total {books.length} Buku
            </span>
          </div>
        </div>

        {/* Empty State vs Responsive Bookshelf Grid */}
        {books.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-[#DCD0B9] bg-[#FFFDF9] p-8 sm:p-12 text-center max-w-lg mx-auto">
            <EmptyLibraryIllustration className="w-56 sm:w-64 mx-auto mb-4" />
            <h3 className="font-child text-2xl font-bold text-[#1F292E]">
              Rak Buku Masih Kosong
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#7A6B56] font-storybook max-w-sm mx-auto">
              Ayo buat buku cerita pertamamu untuk si kecil sekarang juga dan hidupkan petualangan serunya!
            </p>
            <button
              onClick={() => onNavigate('wizard')}
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-[#0D5C58] text-[#FFFDF9] rounded-2xl text-xs font-bold shadow-md hover:bg-[#094542] transition-colors cursor-pointer min-h-[44px]"
            >
              <Plus className="w-4 h-4" />
              <span>Buat Cerita Baru</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onRead={onReadBook}
                onEdit={onEditBook}
                onDuplicate={onDuplicateBook}
                onDelete={onDeleteBook}
              />
            ))}
          </div>
        )}
      </section>

      {/* 5. HOW CERITAKITA WORKS (Warm children's studio visual steps) */}
      <section className="rounded-3xl bg-[#FAF6EE] border-2 border-[#E8DEC7] p-6 sm:p-10 lg:p-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0D5C58] uppercase tracking-wider">
            Mudah & Menyenangkan
          </span>
          <h2 className="font-child text-2xl sm:text-3xl font-bold text-[#1F292E] mt-1">
            Bagaimana CeritaKita Bekerja?
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6B56] mt-1.5 font-storybook">
            Tiga langkah sederhana menghidupkan dongeng favorit keluarga setiap malam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#E5DBCA] flex flex-col items-center text-center shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#E5F2F0] text-[#0D5C58] flex items-center justify-center mb-4 shadow-xs">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-child text-lg font-bold text-[#1F292E]">
              1. Rancang Tokoh Si Kecil
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#615443] leading-relaxed font-storybook">
              Pilih nama anak, model rambut, peci, hijab, busana batik, hingga hobi favorit agar cerita terasa begitu personal.
            </p>
          </div>

          <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#E5DBCA] flex flex-col items-center text-center shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#FEF6E4] text-[#D97706] flex items-center justify-center mb-4 shadow-xs">
              <Palette className="w-7 h-7" />
            </div>
            <h3 className="font-child text-lg font-bold text-[#1F292E]">
              2. Pilih Alur & Nilai Cerita
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#615443] leading-relaxed font-storybook">
              Tentukan tema petualangan, dongeng tidur, atau budi pekerti. Mesin studio kami merakit halaman bergambar yang kaya makna.
            </p>
          </div>

          <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#E5DBCA] flex flex-col items-center text-center shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#E8EFF7] text-[#2563EB] flex items-center justify-center mb-4 shadow-xs">
              <Volume2 className="w-7 h-7" />
            </div>
            <h3 className="font-child text-lg font-bold text-[#1F292E]">
              3. Baca Bersama & Narasi Suara
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#615443] leading-relaxed font-storybook">
              Buka buku interaktif seperti buku fisik nyata dan nikmati pembacaan suara bahasa Indonesia yang menenangkan saat waktu tidur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
