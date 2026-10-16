import React, { useState } from 'react';
import {
  Character,
  Gender,
  SkinTone,
  HairOrHeadwear,
  ClothingStyle,
} from '../types';
import { CharacterAvatar } from './illustrations/CharacterAvatar';
import { EmptyCharactersIllustration } from './illustrations/emptyStates/EmptyCharactersIllustration';
import { Users, Plus, Check, Trash2, Edit2, Sparkles, BookPlus, Smile } from 'lucide-react';

interface CharacterStudioProps {
  characters: Character[];
  onSaveCharacter: (character: Character) => void;
  onDeleteCharacter: (id: string) => void;
  onUseCharacterInStory: (character: Character) => void;
  initialCharacter?: Character | null;
}

const emptyCharacter = (): Character => ({
  id: `char-${Date.now()}`,
  name: '',
  gender: 'boy',
  age: 6,
  skinTone: 'warm',
  hairOrHeadwear: 'short_neat',
  clothing: 'batik_ceria',
  personality: 'Ceria, santun, dan selalu ingin tahu hal-hal baru',
  favoriteThings: 'Buku bintang dan layang-layang',
  role: 'Penjelajah Cilik',
  bio: '',
  glasses: false,
  createdAt: new Date().toISOString(),
});

export const CharacterStudio: React.FC<CharacterStudioProps> = ({
  characters,
  onSaveCharacter,
  onDeleteCharacter,
  onUseCharacterInStory,
  initialCharacter,
}) => {
  const [formData, setFormData] = useState<Character>(
    initialCharacter || emptyCharacter()
  );
  const [formError, setFormError] = useState<string | null>(null);
  const [characterToDelete, setCharacterToDelete] = useState<Character | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(!!initialCharacter);
  const [savedAlert, setSavedAlert] = useState<boolean>(false);

  const handleResetForm = () => {
    setFormData(emptyCharacter());
    setIsEditing(false);
    setFormError(null);
  };

  const handleSelectToEdit = (char: Character) => {
    setFormData({ ...char });
    setIsEditing(true);
    setFormError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Mohon masukkan nama tokoh terlebih dahulu.');
      return;
    }
    setFormError(null);

    onSaveCharacter(formData);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);

    if (!isEditing) {
      setFormData(emptyCharacter());
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 overflow-x-hidden">
      {/* Header Banner */}
      <div className="border-b-2 border-[#EADFC9] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D5C58]">
            <Users className="w-4 h-4" />
            <span>Studio Tokoh & Karakter</span>
          </div>
          <h1 className="font-child text-3xl sm:text-4xl font-bold text-[#1F292E] mt-1">
            Rancang Tokoh Si Kecil
          </h1>
          <p className="text-sm text-[#7A6B56] mt-1 max-w-2xl font-storybook">
            Buat karakter anak dengan ciri khas busana, aksesoris, dan kepribadian yang autentik untuk dihidupkan dalam buku cerita.
          </p>
        </div>

        {isEditing && (
          <button
            onClick={handleResetForm}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#7A6B56] hover:text-[#0D5C58] bg-[#FFFDF9] border-2 border-[#DCD0B9] rounded-2xl transition-colors cursor-pointer self-start sm:self-auto min-h-[44px]"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Tokoh Baru (Batal Edit)</span>
          </button>
        )}
      </div>

      {savedAlert && (
        <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-800 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 animate-fade-in shadow-xs">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Tokoh <strong>{formData.name}</strong> berhasil disimpan ke dalam studio!</span>
          </div>
          <button
            onClick={() => onUseCharacterInStory(formData)}
            className="font-bold underline hover:text-emerald-950 cursor-pointer min-h-[44px] flex items-center"
          >
            Gunakan di Buku Baru Sekarang →
          </button>
        </div>
      )}

      {/* Main Studio Area: Live Avatar Preview on Left, Detailed Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Character Preview */}
        <div className="lg:col-span-5 bg-[#FFFDF9] rounded-3xl border-2 border-[#EADFC9] p-6 sm:p-8 flex flex-col items-center text-center shadow-xs lg:sticky lg:top-24">
          <span className="text-[11px] font-bold tracking-wider text-[#A08E77] uppercase mb-3">
            Pratinjau Tokoh (Vektor Langsung)
          </span>

          <div className="my-2 p-3 sm:p-4 rounded-full bg-gradient-to-b from-[#FFF9EE] to-[#F1E8D5] border-4 border-[#FFFDF9] shadow-md">
            <CharacterAvatar character={formData} size="xl" />
          </div>

          <h2 className="font-child text-2xl font-bold text-[#1F292E] mt-3">
            {formData.name || 'Nama Tokoh'}
          </h2>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#0D5C58] mt-1">
            <span>{formData.role || 'Tokoh Utama'}</span>
            <span aria-hidden="true">·</span>
            <span>Usia {formData.age} Tahun</span>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-[#615443] max-w-sm italic font-storybook leading-relaxed">
            "{formData.personality || 'Anak ramah dan ceria yang siap menjelajah.'}"
          </p>

          <div className="mt-4 pt-4 border-t border-[#F0E6D5] w-full text-left text-xs space-y-1.5 text-[#7A6B56]">
            <div>
              <strong className="text-[#3A3025]">Kesukaan:</strong> {formData.favoriteThings || '-'}
            </div>
            {formData.bio && (
              <div>
                <strong className="text-[#3A3025]">Catatan Tambahan:</strong> {formData.bio}
              </div>
            )}
          </div>

          <p className="mt-4 text-[11px] text-[#A08E77] bg-[#F7F2E7] px-3.5 py-2.5 rounded-xl text-left">
            *Ilustrasi ditampilkan menggunakan vektor dinamis sesuai setelan warna kulit, rambut/tutup kepala, dan busana yang kamu pilih.
          </p>
        </div>

        {/* Right Column: Character Form */}
        <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl border-2 border-[#EADFC9] p-6 sm:p-8 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="font-child text-xl sm:text-2xl font-bold text-[#1F292E] border-b border-[#F0E6D5] pb-3">
              {isEditing ? `Edit Tokoh: ${formData.name}` : 'Detail Tokoh Baru'}
            </h3>

            {formError && (
              <div className="p-3.5 bg-red-50 border-2 border-red-200 text-red-700 text-xs rounded-2xl font-semibold">
                {formError}
              </div>
            )}

            {/* Basic Info: Name, Gender, Age */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                  Nama Tokoh <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Contoh: Rani, Alif, Kiko..."
                  className="w-full px-4 py-3 rounded-2xl border border-[#D5C9B3] bg-[#FDFCF8] text-sm text-[#1F292E] focus:outline-none focus:ring-2 focus:ring-[#0D5C58]/30 focus:border-[#0D5C58] min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                  Usia Tokoh
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={2}
                    max={15}
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) || 5 })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#D5C9B3] bg-[#FDFCF8] text-sm text-[#1F292E] focus:outline-none focus:ring-2 focus:ring-[#0D5C58]/30 focus:border-[#0D5C58] min-h-[44px]"
                  />
                  <span className="text-xs font-semibold text-[#7A6B56] shrink-0">thn</span>
                </div>
              </div>
            </div>

            {/* Gender Segmented Control */}
            <div>
              <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                Jenis / Identitas Tokoh
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'boy', label: 'Anak Laki-Laki' },
                  { value: 'girl', label: 'Anak Perempuan' },
                  { value: 'neutral', label: 'Sahabat Cilik' },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, gender: item.value as Gender })}
                    className={`py-2.5 px-3 text-xs font-bold rounded-2xl border transition-all cursor-pointer min-h-[44px] ${
                      formData.gender === item.value
                        ? 'bg-[#0D5C58] text-[#FFFDF9] border-[#0D5C58] shadow-xs'
                        : 'bg-[#FDFCF8] text-[#615443] border-[#D5C9B3] hover:border-[#0D5C58]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Appearance: Skin Tone */}
            <div>
              <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                Warna Kulit
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { key: 'fair', label: 'Cerah', hex: '#FCD8C1' },
                  { key: 'warm', label: 'Kuning Langsat', hex: '#EAB68B' },
                  { key: 'tan', label: 'Sawo Matang', hex: '#C88E65' },
                  { key: 'deep', label: 'Eksotis Hangat', hex: '#8E5936' },
                ].map((skin) => (
                  <button
                    key={skin.key}
                    type="button"
                    onClick={() => setFormData({ ...formData, skinTone: skin.key as SkinTone })}
                    className={`flex items-center gap-2.5 p-2.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer min-h-[44px] ${
                      formData.skinTone === skin.key
                        ? 'border-[#0D5C58] bg-[#F1F8F7] text-[#0D5C58]'
                        : 'border-[#E2D7C3] bg-[#FDFCF8] hover:border-[#0D5C58]/60 text-[#4A3D2F]'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: skin.hex }}
                    />
                    <span className="truncate">{skin.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hair or Headwear Selection */}
            <div>
              <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                Rambut / Penutup Kepala
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { key: 'short_neat', label: 'Rambut Pendek Rapi' },
                  { key: 'short_curly', label: 'Ikal Menggemaskan' },
                  { key: 'twin_pigtails', label: 'Kuncir Dua Ceria' },
                  { key: 'ponytail', label: 'Kuncir Kuda Tinggi' },
                  { key: 'hijab_pastel', label: 'Jilbab / Hijab Pastel' },
                  { key: 'peci_traditional', label: 'Peci Tradisional' },
                  { key: 'wavy_shoulder', label: 'Gelombang Sebahu' },
                  { key: 'headband_ribbon', label: 'Bando Pita Emas' },
                ].map((h) => (
                  <button
                    key={h.key}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, hairOrHeadwear: h.key as HairOrHeadwear })
                    }
                    className={`p-3 rounded-2xl border text-left text-xs transition-all cursor-pointer min-h-[44px] flex items-center ${
                      formData.hairOrHeadwear === h.key
                        ? 'border-[#0D5C58] bg-[#F1F8F7] text-[#0D5C58] font-bold shadow-xs'
                        : 'border-[#E2D7C3] bg-[#FDFCF8] text-[#554737] hover:border-[#0D5C58]/60'
                    }`}
                  >
                    <span>{h.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clothing Selection */}
            <div>
              <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                Gaya Busana
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { key: 'batik_ceria', label: 'Kemeja Batik Ceria' },
                  { key: 'casual_cloud', label: 'Kaos Santai Awan Biru' },
                  { key: 'explorer_vest', label: 'Rompi Petualang Hijau' },
                  { key: 'flower_dress', label: 'Gaun Bunga Pastel' },
                  { key: 'pajama_stars', label: 'Piyama Bintang Malam' },
                  { key: 'sailor_stripes', label: 'Baju Garis Pelaut' },
                ].map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, clothing: c.key as ClothingStyle })
                    }
                    className={`p-3 rounded-2xl border text-left text-xs transition-all cursor-pointer min-h-[44px] flex items-center ${
                      formData.clothing === c.key
                        ? 'border-[#0D5C58] bg-[#F1F8F7] text-[#0D5C58] font-bold shadow-xs'
                        : 'border-[#E2D7C3] bg-[#FDFCF8] text-[#554737] hover:border-[#0D5C58]/60'
                    }`}
                  >
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Role & Hobbies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                  Peran dalam Cerita
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="Contoh: Tokoh Utama, Kakak Penyayang, Penemu Cilik..."
                  className="w-full px-4 py-3 rounded-2xl border border-[#D5C9B3] bg-[#FDFCF8] text-sm text-[#1F292E] focus:outline-none focus:ring-2 focus:ring-[#0D5C58]/30 focus:border-[#0D5C58] min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                  Hal Kesukaan / Hobi
                </label>
                <input
                  type="text"
                  value={formData.favoriteThings}
                  onChange={(e) =>
                    setFormData({ ...formData, favoriteThings: e.target.value })
                  }
                  placeholder="Contoh: Layang-layang, kue klepon, kucing belang..."
                  className="w-full px-4 py-3 rounded-2xl border border-[#D5C9B3] bg-[#FDFCF8] text-sm text-[#1F292E] focus:outline-none focus:ring-2 focus:ring-[#0D5C58]/30 focus:border-[#0D5C58] min-h-[44px]"
                />
              </div>
            </div>

            {/* Personality description */}
            <div>
              <label className="block text-xs font-bold text-[#3A3025] mb-1.5">
                Karakteristik & Sifat Pribadi
              </label>
              <input
                type="text"
                value={formData.personality}
                onChange={(e) => setFormData({ ...formData, personality: e.target.value })}
                placeholder="Contoh: Ceria, suka berbagi, berani bertanya, dan penyayang binatang..."
                className="w-full px-4 py-3 rounded-2xl border border-[#D5C9B3] bg-[#FDFCF8] text-sm text-[#1F292E] focus:outline-none focus:ring-2 focus:ring-[#0D5C58]/30 focus:border-[#0D5C58] min-h-[44px]"
              />
            </div>

            {/* Glasses Toggle */}
            <div className="flex items-center gap-3 pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-semibold text-[#3A3025] min-h-[44px]">
                <input
                  type="checkbox"
                  checked={formData.glasses || false}
                  onChange={(e) => setFormData({ ...formData, glasses: e.target.checked })}
                  className="w-5 h-5 rounded-lg text-[#0D5C58] focus:ring-[#0D5C58]"
                />
                <span>Memakai Kacamata Bulat Menggemaskan</span>
              </label>
            </div>

            {/* Save Action Buttons */}
            <div className="pt-4 border-t border-[#F0E6D5] flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-2xl text-sm font-bold shadow-md transition-all cursor-pointer min-h-[48px]"
              >
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>{isEditing ? 'Simpan Perubahan Tokoh' : 'Simpan Tokoh ke Studio'}</span>
              </button>

              <button
                type="button"
                onClick={() => onUseCharacterInStory(formData)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FFFDF9] hover:bg-[#F3EBDD] text-[#0D5C58] border-2 border-[#0D5C58] rounded-2xl text-xs sm:text-sm font-bold transition-colors cursor-pointer min-h-[48px]"
              >
                <BookPlus className="w-4 h-4 text-[#C59B27]" />
                <span>Buat Buku dengan Tokoh Ini</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Saved Characters Library Section with Playful Cards */}
      <div className="border-t-2 border-[#EADFC9] pt-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-child text-2xl font-bold text-[#1F292E]">
              Daftar Tokoh Tersimpan ({characters.length})
            </h2>
            <p className="text-xs text-[#7A6B56]">
              Pilih tokoh di bawah ini untuk melihat detail, menyunting, atau langsung membuat buku baru.
            </p>
          </div>
        </div>

        {characters.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-[#DCD0B9] bg-[#FFFDF9] p-8 sm:p-12 text-center max-w-lg mx-auto mt-4">
            <EmptyCharactersIllustration className="w-56 sm:w-64 mx-auto mb-4" />
            <h3 className="font-child text-2xl font-bold text-[#1F292E]">
              Belum Ada Tokoh Tersimpan
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#7A6B56] font-storybook max-w-sm mx-auto">
              Gunakan formulir di atas untuk merancang tokoh si kecil dengan gaya rambut, busana batik, dan kepribadiannya!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {characters.map((char) => (
            <div
              key={char.id}
              className="bg-[#FFFDF9] rounded-3xl border-2 border-[#EADFC9] hover:border-[#0D5C58] p-5 flex items-start gap-4 shadow-xs hover:shadow-md transition-all"
            >
              <CharacterAvatar character={char} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <h4 className="font-child text-lg font-bold text-[#1F292E] truncate">
                      {char.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#0D5C58]">
                      {char.role} · {char.age} Tahun
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleSelectToEdit(char)}
                      title="Edit Tokoh"
                      className="p-2 text-[#7A6B56] hover:text-[#0D5C58] hover:bg-[#F3EBDD] rounded-xl transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                      aria-label={`Edit tokoh ${char.name}`}
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCharacterToDelete(char)}
                      title="Hapus Tokoh"
                      className="p-2 text-[#7A6B56] hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                      aria-label={`Hapus tokoh ${char.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="mt-1 text-xs text-[#615443] line-clamp-2 italic font-storybook">
                  "{char.personality}"
                </p>

                <div className="mt-3 pt-2.5 border-t border-[#F0E6D5] flex items-center justify-between">
                  <span className="text-[11px] text-[#A08E77] truncate">
                    Hobi: {char.favoriteThings}
                  </span>
                  <button
                    onClick={() => onUseCharacterInStory(char)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0D5C58] hover:text-[#083D3A] cursor-pointer min-h-[36px] py-1"
                  >
                    <BookPlus className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Pakai di Cerita</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* Confirmation Modal for Character Deletion */}
      {characterToDelete && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#EADFC9] p-6 max-w-md w-full space-y-4 shadow-xl">
            <h4 className="font-child text-lg font-bold text-red-700">
              Hapus Tokoh "{characterToDelete.name}"?
            </h4>
            <p className="text-xs sm:text-sm text-[#615443] leading-relaxed font-storybook">
              Karakter ini akan dihapus dari studio tokomu. Buku cerita yang sudah tersimpan sebelumnya yang menggunakan tokoh ini tidak akan terpengaruh.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setCharacterToDelete(null)}
                className="px-4 py-2 text-xs font-bold text-[#7A6B56] hover:bg-[#F3EBDD] rounded-xl transition-colors cursor-pointer min-h-[44px]"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  onDeleteCharacter(characterToDelete.id);
                  setCharacterToDelete(null);
                }}
                className="px-5 py-2 text-xs font-bold bg-red-700 text-white rounded-xl hover:bg-red-800 transition-colors cursor-pointer min-h-[44px]"
              >
                Ya, Hapus Tokoh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
