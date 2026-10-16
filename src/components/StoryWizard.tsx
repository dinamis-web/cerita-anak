import React, { useState } from 'react';
import {
  Character,
  StoryGenre,
  TargetAge,
  ArtStyle,
  Book,
  Gender,
  SkinTone,
  HairOrHeadwear,
  ClothingStyle,
} from '../types';
import { aiManager } from '../services/ai';
import { storageService } from '../services/storage';
import { CharacterAvatar } from './illustrations/CharacterAvatar';
import { EmptyStoryStartIllustration } from './illustrations/emptyStates/EmptyStoryStartIllustration';
import { EmptyCharactersIllustration } from './illustrations/emptyStates/EmptyCharactersIllustration';
import {
  Lightbulb,
  Sparkles,
  Users,
  Settings,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Edit3,
  Plus,
  X,
  Check,
} from 'lucide-react';

interface StoryWizardProps {
  characters: Character[];
  selectedCharacterId?: string;
  onFinish: (book: Book, openReaderImmediately?: boolean) => void;
  onCancel: () => void;
  onNavigateToCharacterStudio: () => void;
}

const guidedPrompts = [
  'Mencari pelangi rahasia di atas bukit hijau bersama layang-layang warna-warni',
  'Hari pertama sekolah dengan berani dan menemukan sahabat baru yang ramah',
  'Menatap bintang kejora di malam hari dan belajar bersyukur atas alam semesta',
  'Membantu anak kancil mungil di hutan yang tersangkut akar pohon',
  'Merakit perahu kertas dan mengapungkannya usai hujan sore',
  'Membuat kue tradisional bersama nenek di beranda rumah yang asri',
];

const genreOptions: { key: StoryGenre; label: string; desc: string }[] = [
  { key: 'adventure', label: 'Petualangan Ceria', desc: 'Penjelajahan alam terbuka dan keberanian' },
  { key: 'friendship', label: 'Persahabatan Hangat', desc: 'Indahnya berbagi dan tolong-menolong' },
  { key: 'bedtime', label: 'Pengantar Tidur Damai', desc: 'Ritme tenang pengantar mimpi indah' },
  { key: 'moral_values', label: 'Nilai Moral & Budi Pekerti', desc: 'Kesantunan, kejujuran, dan empati' },
  { key: 'educational', label: 'Edukasi & Sains Alam', desc: 'Mengenal fenomena flora, fauna, dan bintang' },
  { key: 'fantasy', label: 'Dongeng & Fantasi', desc: 'Imajinasi keajaiban dunia dongeng nusantara' },
];

const ageOptions: { key: TargetAge; label: string; desc: string }[] = [
  { key: '3-4', label: 'Usia 3–4 Tahun', desc: 'Kalimat pendek, rima ceria, bahasa visual sederhana' },
  { key: '5-7', label: 'Usia 5–7 Tahun', desc: 'Cerita eksploratif dengan dialog interaktif hangat' },
  { key: '8-10', label: 'Usia 8–10 Tahun', desc: 'Alur lebih kaya dengan pesan budi pekerti mendalam' },
];

const pageCountOptions: (6 | 8 | 12)[] = [6, 8, 12];

const artStyleOptions: { key: ArtStyle; label: string; desc: string }[] = [
  { key: 'watercolor', label: 'Cat Air Lembut (Watercolor)', desc: 'Sentuhan artistik hangat dan lembut' },
  { key: 'cartoon', label: 'Kartun Ceria (Playful Cartoon)', desc: 'Warna cerah ceria penuh ekspresi' },
  { key: 'classic', label: 'Buku Klasik (Vintage Picture Book)', desc: 'Gaya buku dongeng klasik dengan nuansa sephia emas' },
  { key: 'warm3d', label: '3D Hangat (Warm 3D Clay)', desc: 'Karakter berdimensi manis dan ramah' },
];

export const StoryWizard: React.FC<StoryWizardProps> = ({
  characters: initialCharacters,
  selectedCharacterId,
  onFinish,
  onCancel,
  onNavigateToCharacterStudio,
}) => {
  const [characterList, setCharacterList] = useState<Character[]>(initialCharacters);
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [idea, setIdea] = useState<string>('');
  const [characterId, setCharacterId] = useState<string>(
    selectedCharacterId || (initialCharacters.length > 0 ? initialCharacters[0].id : '')
  );
  const [genre, setGenre] = useState<StoryGenre>('adventure');
  const [targetAge, setTargetAge] = useState<TargetAge>('5-7');
  const [pageCount, setPageCount] = useState<6 | 8 | 12>(6);
  const [artStyle, setArtStyle] = useState<ArtStyle>('watercolor');
  const [authorName, setAuthorName] = useState<string>('Keluarga CeritaKita');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Inline Quick Character Creator state
  const [showQuickCreate, setShowQuickCreate] = useState(false);
  const [quickName, setQuickName] = useState('');
  const [quickGender, setQuickGender] = useState<Gender>('boy');
  const [quickAge, setQuickAge] = useState<number>(5);
  const [quickSkin, setQuickSkin] = useState<SkinTone>('warm');
  const [quickHair, setQuickHair] = useState<HairOrHeadwear>('short_neat');
  const [quickClothing, setQuickClothing] = useState<ClothingStyle>('batik_ceria');

  const selectedCharacter =
    characterList.find((c) => c.id === characterId) || characterList[0];

  const handleSaveQuickCharacter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim()) {
      return;
    }

    const newChar: Character = {
      id: `char-${Date.now()}`,
      name: quickName.trim(),
      gender: quickGender,
      age: quickAge,
      skinTone: quickSkin,
      hairOrHeadwear: quickHair,
      clothing: quickClothing,
      personality: 'Ceria, berani, dan suka berpetualang',
      favoriteThings: 'Buku cerita dan mainan favorit',
      role: 'Tokoh Utama',
      createdAt: new Date().toISOString(),
    };

    storageService.saveCharacter(newChar);
    const updated = [newChar, ...characterList];
    setCharacterList(updated);
    setCharacterId(newChar.id);
    setShowQuickCreate(false);
    setQuickName('');
  };

  const handleCreateBook = async (openReader = false) => {
    if (!selectedCharacter) {
      setCurrentStep(2);
      return;
    }

    setIsGenerating(true);

    try {
      const generatedBook = await aiManager.getTextService().generateBook({
        idea,
        character: selectedCharacter,
        genre,
        targetAge,
        pageCount,
        artStyle,
        authorName,
      });

      setIsGenerating(false);
      onFinish(generatedBook, openReader);
    } catch (err) {
      console.error('Error generating story:', err);
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 overflow-x-hidden">
      {/* Wizard Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F2F0] border border-[#BCE2DC] text-xs font-bold text-[#0D5C58]">
          <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
          <span>Studio Pembuatan Buku Bergambar</span>
        </div>
        <h1 className="font-child text-3xl sm:text-4xl font-bold text-[#1F292E]">
          Rancang Buku Cerita Baru
        </h1>
        <p className="text-sm text-[#7A6B56] max-w-xl mx-auto font-storybook">
          Ikuti 4 langkah mudah untuk merakit alur dongeng bergambar untuk si kecil.
        </p>
      </div>

      {/* Clean Stepper Bar with touch-friendly 44px buttons */}
      <div className="grid grid-cols-4 gap-2 border-b-2 border-[#EADFC9] pb-4">
        {[
          { step: 1, label: '1. Ide Cerita' },
          { step: 2, label: '2. Tokoh Utama' },
          { step: 3, label: '3. Pengaturan' },
          { step: 4, label: '4. Tinjau & Rakit' },
        ].map((item) => (
          <button
            key={item.step}
            type="button"
            onClick={() => setCurrentStep(item.step)}
            className={`text-left pb-2 transition-all cursor-pointer min-h-[44px] flex items-center ${
              currentStep === item.step
                ? 'border-b-2 border-[#0D5C58] text-[#0D5C58] font-bold'
                : currentStep > item.step
                ? 'border-b-2 border-[#C59B27] text-[#554737] font-semibold'
                : 'border-b-2 border-transparent text-[#9E907E]'
            }`}
          >
            <span className="block text-xs sm:text-sm font-child truncate">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-[#FFFDF9] rounded-3xl border border-[#EADFC9] p-6 sm:p-10 shadow-xs min-h-[440px] flex flex-col justify-between">
        {/* STEP 1: Story Idea */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C59B27] uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>Langkah 1: Tuliskan Inspirasi Cerita</span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1F292E] mt-1">
                  Petualangan apa yang ingin kamu ceritakan?
                </h2>
                <p className="text-xs sm:text-sm text-[#7A6B56] mt-1 font-storybook leading-relaxed">
                  Tuliskan ide bebas atau klik salah satu inspirasi cerita anak Indonesia di bawah ini untuk memulai lembaran dongeng ajaib.
                </p>
              </div>
              <div className="md:col-span-5 hidden sm:block">
                <EmptyStoryStartIllustration className="w-full max-w-[280px] mx-auto" />
              </div>
            </div>

            <div>
              <textarea
                rows={3}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Misal: Cerita tentang keberanian menaiki sepeda roda dua tanpa takut jatuh, ditemani ayah dan kucing kesayangan..."
                className="w-full px-4 py-3 rounded-2xl border border-[#D5C9B3] bg-[#FDFCF8] text-sm text-[#1F292E] focus:outline-none focus:ring-2 focus:ring-[#0D5C58]/30 focus:border-[#0D5C58] leading-relaxed"
              />
            </div>

            {/* Guided Inspiration Prompts */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#5A4D3E]">
                Inspirasi Ide Siap Pakai (Klik untuk memilih):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {guidedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setIdea(prompt)}
                    className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                      idea === prompt
                        ? 'border-[#0D5C58] bg-[#E8F3F1] text-[#0D5C58] font-medium'
                        : 'border-[#E5DAC6] bg-[#FDFCF8] text-[#554737] hover:border-[#0D5C58]/60 hover:bg-[#FAF6EE]'
                    }`}
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Choose Main Character or Quick Create */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0D5C58] uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>Langkah 2: Pilih Tokoh Utama</span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1F292E] mt-1">
                  Siapa pahlawan cilik dalam cerita ini?
                </h2>
                <p className="text-xs sm:text-sm text-[#7A6B56] mt-1 font-storybook">
                  Pilih tokoh yang sudah ada atau buat tokoh baru secara langsung.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowQuickCreate(!showQuickCreate)}
                  className="px-3 py-1.5 bg-[#0D5C58] text-[#FFFDF9] rounded-lg text-xs font-semibold hover:bg-[#083D3A] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showQuickCreate ? 'Tutup Form' : 'Buat Tokoh Cepat'}</span>
                </button>
                <button
                  type="button"
                  onClick={onNavigateToCharacterStudio}
                  className="px-3 py-1.5 text-xs font-medium text-[#7A6B56] hover:text-[#0D5C58] underline cursor-pointer"
                >
                  Studio Tokoh Lengkap
                </button>
              </div>
            </div>

            {/* Quick Character Creator Panel */}
            {showQuickCreate && (
              <form
                onSubmit={handleSaveQuickCharacter}
                className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC7] space-y-4 text-xs animate-fade-in"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-[#0D5C58] text-sm">Buat Tokoh Baru Cepat</strong>
                  <button
                    type="button"
                    onClick={() => setShowQuickCreate(false)}
                    className="text-[#7A6B56] hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3A3025] mb-1">
                      Nama Tokoh
                    </label>
                    <input
                      type="text"
                      required
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      placeholder="Misal: Dimas, Nisa..."
                      className="w-full px-3 py-1.5 rounded-lg border border-[#D5C9B3] bg-white text-xs focus:outline-none focus:border-[#0D5C58]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#3A3025] mb-1">
                      Gaya Rambut / Peci / Hijab
                    </label>
                    <select
                      value={quickHair}
                      onChange={(e) => setQuickHair(e.target.value as HairOrHeadwear)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#D5C9B3] bg-white text-xs focus:outline-none focus:border-[#0D5C58]"
                    >
                      <option value="short_neat">Rambut Pendek Rapi</option>
                      <option value="short_curly">Rambut Ikal</option>
                      <option value="twin_pigtails">Kuncir Dua</option>
                      <option value="ponytail">Kuncir Kuda</option>
                      <option value="hijab_pastel">Jilbab / Hijab Pastel</option>
                      <option value="peci_traditional">Peci Tradisional</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#3A3025] mb-1">
                      Busana
                    </label>
                    <select
                      value={quickClothing}
                      onChange={(e) => setQuickClothing(e.target.value as ClothingStyle)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#D5C9B3] bg-white text-xs focus:outline-none focus:border-[#0D5C58]"
                    >
                      <option value="batik_ceria">Kemeja Batik Ceria</option>
                      <option value="casual_cloud">Kaos Santai Awan</option>
                      <option value="explorer_vest">Rompi Petualang</option>
                      <option value="flower_dress">Gaun Bunga</option>
                      <option value="pajama_stars">Piyama Bintang</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#0D5C58] text-[#FFFDF9] rounded-lg text-xs font-semibold hover:bg-[#083D3A] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Simpan & Gunakan Tokoh Ini</span>
                  </button>
                </div>
              </form>
            )}

            {/* Existing Characters Grid */}
            {characterList.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-[#DCD0B9] p-6 text-center bg-[#FAF6EE]">
                <EmptyCharactersIllustration className="w-48 mx-auto mb-3" />
                <h4 className="font-child text-lg font-bold text-[#1F292E]">
                  Belum Ada Tokoh Tersedia
                </h4>
                <p className="text-xs text-[#7A6B56] mt-1 max-w-sm mx-auto font-storybook">
                  Klik tombol "Buat Tokoh Cepat" di atas untuk menambahkan pahlawan ceritamu sekarang!
                </p>
                <button
                  type="button"
                  onClick={() => setShowQuickCreate(true)}
                  className="mt-3 px-5 py-2.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-xl text-xs font-bold cursor-pointer"
                >
                  + Buat Tokoh Cepat Sekarang
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {characterList.map((char) => (
                  <div
                    key={char.id}
                    onClick={() => setCharacterId(char.id)}
                    className={`p-4 rounded-2xl border-2 flex items-center gap-3.5 transition-all cursor-pointer ${
                      characterId === char.id
                        ? 'border-[#0D5C58] bg-[#F1F8F7] shadow-xs'
                        : 'border-[#E5DAC6] bg-[#FDFCF8] hover:border-[#0D5C58]/60'
                    }`}
                  >
                    <CharacterAvatar character={char} size="md" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading text-base font-bold text-[#1F292E] truncate">
                          {char.name}
                        </h4>
                        {characterId === char.id && (
                          <CheckCircle2 className="w-5 h-5 text-[#0D5C58]" />
                        )}
                      </div>
                      <span className="text-xs text-[#7A6B56]">
                        {char.role} · {char.age} thn
                      </span>
                      <p className="text-[11px] text-[#806F5A] truncate mt-0.5 font-storybook">
                        "{char.personality}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STEP 3: Story Settings */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0D5C58] uppercase tracking-wider">
                <Settings className="w-4 h-4" />
                <span>Langkah 3: Pengaturan Cerita</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1F292E] mt-1">
                Sesuaikan format buku cerita
              </h2>
              <p className="text-xs sm:text-sm text-[#7A6B56] mt-1 font-storybook">
                Tentukan genre, usia pembaca, jumlah halaman, dan gaya ilustrasi.
              </p>
            </div>

            {/* Genre */}
            <div>
              <label className="block text-xs font-semibold text-[#3A3025] mb-2">
                Genre / Nilai Cerita
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {genreOptions.map((g) => (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => setGenre(g.key)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      genre === g.key
                        ? 'border-[#0D5C58] bg-[#F1F8F7] text-[#0D5C58]'
                        : 'border-[#E5DAC6] bg-[#FDFCF8] text-[#554737] hover:border-[#0D5C58]/60'
                    }`}
                  >
                    <span className="block text-xs font-bold">{g.label}</span>
                    <span className="block text-[11px] text-[#7A6B56] mt-0.5 line-clamp-1">
                      {g.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Target Age & Page Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#3A3025] mb-2">
                  Sasaran Usia Anak
                </label>
                <div className="space-y-1.5">
                  {ageOptions.map((a) => (
                    <button
                      key={a.key}
                      type="button"
                      onClick={() => setTargetAge(a.key)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center justify-between ${
                        targetAge === a.key
                          ? 'border-[#0D5C58] bg-[#F1F8F7] text-[#0D5C58] font-bold'
                          : 'border-[#E5DAC6] bg-[#FDFCF8] text-[#554737] hover:border-[#0D5C58]/60'
                      }`}
                    >
                      <span>{a.label}</span>
                      <span className="text-[11px] text-[#7A6B56] font-normal">{a.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A3025] mb-2">
                  Jumlah Halaman Buku
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {pageCountOptions.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setPageCount(count)}
                      className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                        pageCount === count
                          ? 'border-[#0D5C58] bg-[#0D5C58] text-[#FFFDF9] font-bold'
                          : 'border-[#E5DAC6] bg-[#FDFCF8] text-[#554737] hover:border-[#0D5C58]'
                      }`}
                    >
                      <span className="block text-base font-bold">{count}</span>
                      <span className="block text-[11px]">Halaman</span>
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-[#3A3025] mb-1">
                    Nama Penulis / Keluarga
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Contoh: Ayah Budi & Bunda"
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C9B3] bg-[#FDFCF8] text-xs text-[#1F292E] focus:outline-none focus:border-[#0D5C58]"
                  />
                </div>
              </div>
            </div>

            {/* Art Style */}
            <div>
              <label className="block text-xs font-semibold text-[#3A3025] mb-2">
                Gaya Ilustrasi Buku
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {artStyleOptions.map((art) => (
                  <button
                    key={art.key}
                    type="button"
                    onClick={() => setArtStyle(art.key)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      artStyle === art.key
                        ? 'border-[#0D5C58] bg-[#F1F8F7] text-[#0D5C58] font-bold'
                        : 'border-[#E5DAC6] bg-[#FDFCF8] text-[#554737] hover:border-[#0D5C58]/60'
                    }`}
                  >
                    <span>{art.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Review & Generate */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C59B27] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Langkah 4: Tinjau & Rakit Buku Cerita</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1F292E] mt-1">
                Siap merakit buku cerita untuk si kecil!
              </h2>
              <p className="text-xs sm:text-sm text-[#7A6B56] mt-1 font-storybook">
                Periksa kembali ringkasan pilihanmu sebelum buku dibuatkan alurnya.
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-[#FAF6EE] rounded-2xl border border-[#E8DEC7] p-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[#887864] block">Tokoh Utama:</span>
                  <div className="mt-1 flex items-center gap-2">
                    {selectedCharacter && (
                      <CharacterAvatar character={selectedCharacter} size="sm" />
                    )}
                    <div>
                      <strong className="text-sm text-[#1F292E]">
                        {selectedCharacter?.name || 'Belum dipilih'}
                      </strong>
                      <p className="text-[11px] text-[#7A6B56]">
                        {selectedCharacter?.role} · {selectedCharacter?.age} tahun
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[#887864] block">Pengaturan Cerita:</span>
                  <div className="mt-1 space-y-0.5 text-[#332A20]">
                    <p>
                      <strong>Genre:</strong>{' '}
                      {genreOptions.find((g) => g.key === genre)?.label}
                    </p>
                    <p>
                      <strong>Usia:</strong> {targetAge} Tahun
                    </p>
                    <p>
                      <strong>Panjang:</strong> {pageCount} Halaman Lengkap
                    </p>
                    <p>
                      <strong>Gaya:</strong>{' '}
                      {artStyleOptions.find((a) => a.key === artStyle)?.label}
                    </p>
                    <p>
                      <strong>Penulis:</strong> {authorName}
                    </p>
                  </div>
                </div>
              </div>

              {idea && (
                <div className="pt-3 border-t border-[#E8DFC8]">
                  <span className="text-[#887864] block">Ide & Alur Cerita:</span>
                  <p className="mt-0.5 text-xs text-[#332A20] font-storybook italic">
                    "{idea}"
                  </p>
                </div>
              )}
            </div>

            {/* Studio Generator Notice */}
            <div className="p-4 rounded-xl bg-[#F0F7F6] border border-[#CDE5E3] text-xs text-[#0D5C58]">
              <strong className="font-semibold block mb-0.5">
                Studio Cerita Lokal CeritaKita
              </strong>
              <p className="text-[11px] text-[#1B6864] leading-relaxed">
                Cerita akan dirakit menggunakan modul template narasi lokal yang terstruktur dan bermakna. Setiap kata, kalimat, maupun pilihan ilustrasinya dapat langsung diedit di Story Editor.
              </p>
            </div>
          </div>
        )}

        {/* Step Navigation Bar */}
        <div className="pt-6 border-t border-[#EADFC9] flex items-center justify-between">
          <div>
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#615443] hover:text-[#0D5C58] bg-[#FFFDF9] border border-[#DCD0B9] rounded-xl transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onCancel}
                className="text-xs font-medium text-[#7A6B56] hover:text-[#0D5C58] cursor-pointer"
              >
                Kembali ke Beranda
              </button>
            )}
          </div>

          <div>
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={isGenerating}
                  onClick={() => handleCreateBook(false)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFFDF9] hover:bg-[#F3EBDD] text-[#0D5C58] border border-[#0D5C58] rounded-xl text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Buka di Editor</span>
                </button>

                <button
                  type="button"
                  disabled={isGenerating}
                  onClick={() => handleCreateBook(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{isGenerating ? 'Merakit Cerita...' : 'Buat & Langsung Baca'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
