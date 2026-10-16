import React from 'react';
import { BookOpen, Heart, Sparkles, Star } from 'lucide-react';
import { ActiveView } from '../types';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t-2 border-[#EADFC9] bg-[#FAF6EE] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand statement */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-2xl bg-[#0D5C58] flex items-center justify-center text-[#DFBE72] shadow-xs">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="font-child text-xl font-bold text-[#0D5C58] block">
              CeritaKita
            </span>
            <p className="text-xs text-[#7A6B56]">
              Studio dongeng bergambar & interaktif untuk keluarga Indonesia.
            </p>
          </div>
        </div>

        {/* Clean Text Links with comfortable tap targets */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#615443]">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#0D5C58] transition-colors cursor-pointer py-2 min-h-[44px] flex items-center"
          >
            Beranda
          </button>
          <button
            onClick={() => onNavigate('character-studio')}
            className="hover:text-[#0D5C58] transition-colors cursor-pointer py-2 min-h-[44px] flex items-center"
          >
            Tokoh Saya
          </button>
          <button
            onClick={() => onNavigate('wizard')}
            className="hover:text-[#0D5C58] transition-colors cursor-pointer py-2 min-h-[44px] flex items-center"
          >
            Buat Cerita Baru
          </button>
        </div>

        {/* Quiet Cultural Note */}
        <div className="text-xs text-[#8A7B68] flex items-center justify-center gap-1.5 font-medium">
          <span>Diciptakan dengan</span>
          <Heart className="w-4 h-4 fill-[#E05B5B] text-[#E05B5B]" />
          <span>untuk imajinasi anak Indonesia</span>
        </div>
      </div>
    </footer>
  );
};
