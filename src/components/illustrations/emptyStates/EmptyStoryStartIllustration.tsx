import React from 'react';

interface EmptyStoryStartIllustrationProps {
  className?: string;
}

export const EmptyStoryStartIllustration: React.FC<EmptyStoryStartIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/9] max-w-[480px] mx-auto select-none ${className}`}>
      <svg
        viewBox="0 0 540 300"
        className="w-full h-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="scrollBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF9EE" />
            <stop offset="50%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#EBF6F4" />
          </linearGradient>

          <linearGradient id="parchmentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F9F3E6" />
          </linearGradient>

          <linearGradient id="quillGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#DFBE72" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <radialGradient id="storyMagicGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF7D6" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Paper Container */}
        <rect width="540" height="300" rx="28" fill="url(#scrollBgGrad)" />

        {/* Magical Glow Behind Scroll */}
        <ellipse cx="270" cy="150" rx="180" ry="100" fill="url(#storyMagicGlow)" />

        {/* Unfurled Ancient Scroll / Parchment */}
        <g transform="translate(110, 45)">
          {/* Scroll shadow */}
          <rect x="15" y="15" width="290" height="180" rx="16" fill="#D8CAB5" opacity="0.3" />

          {/* Scroll paper base */}
          <rect x="10" y="10" width="300" height="190" rx="16" fill="url(#parchmentGrad)" stroke="#DFBE72" strokeWidth="2.5" />

          {/* Golden Corner Batik Filigree */}
          {/* Top-Left */}
          <path d="M18 35 C18 22 22 18 35 18" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="24" cy="24" r="2.5" fill="#D97706" />

          {/* Top-Right */}
          <path d="M302 35 C302 22 298 18 285 18" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="296" cy="24" r="2.5" fill="#D97706" />

          {/* Bottom-Left */}
          <path d="M18 175 C18 188 22 192 35 192" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="24" cy="186" r="2.5" fill="#D97706" />

          {/* Bottom-Right */}
          <path d="M302 175 C302 188 298 192 285 192" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="296" cy="186" r="2.5" fill="#D97706" />

          {/* Elegant Page Header Title Line */}
          <rect x="50" y="40" width="130" height="12" rx="4" fill="#0D5C58" opacity="0.75" />
          <circle cx="40" cy="46" r="4" fill="#DFBE72" />

          {/* Whimsical Story Text Guideline Lines */}
          <line x1="40" y1="75" x2="280" y2="75" stroke="#DFBE72" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8" />
          <line x1="40" y1="105" x2="270" y2="105" stroke="#DFBE72" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8" />
          <line x1="40" y1="135" x2="250" y2="135" stroke="#DFBE72" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8" />
          <line x1="40" y1="165" x2="180" y2="165" stroke="#DFBE72" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8" />

          {/* Left Bookmark Ribbon Ribbon */}
          <path d="M85 8 L85 55 L95 47 L105 55 L105 8 Z" fill="#E11D48" opacity="0.9" />
        </g>

        {/* Vintage Ceramic Inkwell Bottle */}
        <g transform="translate(65, 175)">
          {/* Base shadow */}
          <ellipse cx="25" cy="50" rx="24" ry="8" fill="#1C1917" opacity="0.15" />
          {/* Bottle body */}
          <path d="M10 25 L40 25 L45 46 L5 46 Z" fill="#0D5C58" stroke="#083D3A" strokeWidth="1.5" />
          {/* Bottle neck */}
          <rect x="18" y="15" width="14" height="10" fill="#0D5C58" />
          <ellipse cx="25" cy="15" rx="7" ry="2.5" fill="#DFBE72" />
          {/* Label */}
          <rect x="15" y="30" width="20" height="10" rx="2" fill="#FFFDF9" opacity="0.85" />
          <line x1="18" y1="35" x2="32" y2="35" stroke="#0D5C58" strokeWidth="1.5" />
        </g>

        {/* Glowing Golden Quill Pen */}
        <g transform="translate(370, 75) rotate(-35)">
          {/* Nib shadow */}
          <ellipse cx="0" cy="150" rx="6" ry="3" fill="#1C1917" opacity="0.2" />

          {/* Golden Feather Feathering */}
          <path
            d="M0 0 C-20 40 -35 90 0 145 C35 90 20 40 0 0 Z"
            fill="url(#quillGold)"
            stroke="#92400E"
            strokeWidth="1.5"
          />
          {/* Central Quill Spine */}
          <line x1="0" y1="5" x2="0" y2="160" stroke="#FFFBEB" strokeWidth="2.5" strokeLinecap="round" />
          {/* Quill Metal Writing Tip */}
          <polygon points="-3,145 3,145 0,165" fill="#D97706" stroke="#78350F" strokeWidth="1" />
        </g>

        {/* Swirling Sparkles and Creative Stardust */}
        <g fill="#F59E0B">
          <circle cx="210" cy="40" r="3" opacity="0.85" />
          <circle cx="340" cy="48" r="3.5" opacity="0.9" />
          <circle cx="470" cy="130" r="2.5" opacity="0.75" />
          <circle cx="460" cy="220" r="3" opacity="0.8" />
          <circle cx="95" cy="90" r="2.5" opacity="0.7" />

          {/* Star 1 */}
          <path d="M480 70 L483 78 L491 80 L484 86 L486 94 L480 89 L473 94 L475 86 L469 80 L477 78 Z" />
          {/* Star 2 */}
          <path d="M300 235 L302 240 L307 241 L303 245 L304 250 L300 247 L296 250 L297 245 L293 241 L298 240 Z" />
        </g>

        {/* Floating Playful Color Droplets */}
        <circle cx="380" cy="190" r="5" fill="#38BDF8" opacity="0.7" />
        <circle cx="410" cy="210" r="4" fill="#F43F5E" opacity="0.65" />
        <circle cx="140" cy="245" r="4.5" fill="#10B981" opacity="0.65" />
      </svg>
    </div>
  );
};
