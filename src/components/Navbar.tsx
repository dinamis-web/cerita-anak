import React, { useState } from 'react';
import { BookOpen, Users, Plus, Sparkles, RotateCcw, Library, Menu, X } from 'lucide-react';
import { ActiveView } from '../types';

interface NavbarProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  onResetData: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigate, onResetData }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGoToCollection = () => {
    onNavigate('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById('koleksi-buku');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleMobileNav = (view: ActiveView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#EADFC9] shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with friendly storybook icon */}
        <button
          onClick={() => handleMobileNav('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C58] rounded-xl p-1"
          aria-label="Kembali ke Beranda CeritaKita"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0D5C58] to-[#083D3A] flex items-center justify-center text-[#DFBE72] shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <span className="font-child text-2xl font-bold tracking-tight text-[#0D5C58] block leading-none">
              CeritaKita
            </span>
            <span className="text-[11px] font-semibold text-[#8C7A62] tracking-wide block mt-0.5">
              Studio Dongeng Bergambar
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-all cursor-pointer pb-1 border-b-2 ${
              activeView === 'home'
                ? 'text-[#0D5C58] border-[#0D5C58]'
                : 'text-[#615443] border-transparent hover:text-[#0D5C58]'
            }`}
          >
            Beranda
          </button>

          <button
            onClick={handleGoToCollection}
            className="flex items-center gap-1.5 transition-all cursor-pointer pb-1 border-b-2 text-[#615443] border-transparent hover:text-[#0D5C58]"
          >
            <Library className="w-4 h-4 text-[#C59B27]" />
            <span>Koleksi Buku</span>
          </button>

          <button
            onClick={() => onNavigate('character-studio')}
            className={`flex items-center gap-1.5 transition-all cursor-pointer pb-1 border-b-2 ${
              activeView === 'character-studio'
                ? 'text-[#0D5C58] border-[#0D5C58]'
                : 'text-[#615443] border-transparent hover:text-[#0D5C58]'
            }`}
          >
            <Users className="w-4 h-4 text-[#7A6B56]" />
            <span>Tokoh Saya</span>
          </button>

          <button
            onClick={() => onNavigate('wizard')}
            className={`flex items-center gap-1.5 transition-all cursor-pointer pb-1 border-b-2 ${
              activeView === 'wizard'
                ? 'text-[#0D5C58] border-[#0D5C58]'
                : 'text-[#615443] border-transparent hover:text-[#0D5C58]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Studio Cerita</span>
          </button>
        </nav>

        {/* Action Controls & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onResetData}
            title="Muat Ulang Contoh Data Buku & Tokoh"
            className="hidden sm:flex text-xs font-medium text-[#7A6B56] hover:text-[#0D5C58] px-2.5 py-2 rounded-xl hover:bg-[#F3EBDD] transition-colors items-center gap-1.5 cursor-pointer min-h-[44px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Reset Contoh</span>
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={() => handleMobileNav('wizard')}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-[#0D5C58] hover:bg-[#094542] text-[#FFFDF9] rounded-2xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[44px]"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Buat Cerita Baru</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-[#0D5C58] hover:bg-[#F3EBDD] transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF9] border-b border-[#EADFC9] px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fade-in">
          <button
            onClick={() => handleMobileNav('home')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2.5 min-h-[44px] ${
              activeView === 'home'
                ? 'bg-[#EAF5F3] text-[#0D5C58]'
                : 'text-[#4A3D2F] hover:bg-[#FAF4E8]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#0D5C58]" />
            <span>Beranda</span>
          </button>

          <button
            onClick={handleGoToCollection}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2.5 text-[#4A3D2F] hover:bg-[#FAF4E8] min-h-[44px]"
          >
            <Library className="w-4 h-4 text-[#C59B27]" />
            <span>Koleksi Buku Cerita</span>
          </button>

          <button
            onClick={() => handleMobileNav('character-studio')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2.5 min-h-[44px] ${
              activeView === 'character-studio'
                ? 'bg-[#EAF5F3] text-[#0D5C58]'
                : 'text-[#4A3D2F] hover:bg-[#FAF4E8]'
            }`}
          >
            <Users className="w-4 h-4 text-[#0D5C58]" />
            <span>Tokoh Karakter</span>
          </button>

          <button
            onClick={() => handleMobileNav('wizard')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2.5 min-h-[44px] ${
              activeView === 'wizard'
                ? 'bg-[#EAF5F3] text-[#0D5C58]'
                : 'text-[#4A3D2F] hover:bg-[#FAF4E8]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span>Studio Cerita Baru</span>
          </button>

          <div className="pt-2 border-t border-[#F0E6D5] flex items-center justify-between px-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResetData();
              }}
              className="text-xs text-[#8C7A62] hover:text-[#0D5C58] flex items-center gap-1.5 py-2 min-h-[44px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Contoh Bawaan</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
