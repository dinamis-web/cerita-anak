import React from 'react';

interface EmptyCharactersIllustrationProps {
  className?: string;
}

export const EmptyCharactersIllustration: React.FC<EmptyCharactersIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] max-w-[340px] mx-auto select-none ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="easelSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F5ECE1" />
          </linearGradient>
          <linearGradient id="paletteWood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBE72" />
            <stop offset="100%" stopColor="#B38E38" />
          </linearGradient>
        </defs>

        {/* Paper container background */}
        <rect width="400" height="300" rx="28" fill="url(#easelSky)" />

        {/* Wooden Artist Easel */}
        <g transform="translate(200, 30)">
          {/* Easel rear leg */}
          <line x1="0" y1="20" x2="0" y2="230" stroke="#8C6239" strokeWidth="8" strokeLinecap="round" opacity="0.6" />

          {/* Easel front legs */}
          <line x1="0" y1="20" x2="-80" y2="235" stroke="#A07245" strokeWidth="9" strokeLinecap="round" />
          <line x1="0" y1="20" x2="80" y2="235" stroke="#A07245" strokeWidth="9" strokeLinecap="round" />

          {/* Easel canvas shelf bar */}
          <rect x="-105" y="160" width="210" height="14" rx="4" fill="#8C6239" stroke="#5E4024" strokeWidth="1.5" />

          {/* Canvas Board */}
          <g transform="translate(-85, 30)">
            {/* Canvas drop shadow */}
            <rect x="0" y="0" width="170" height="130" rx="12" fill="#D5C5B0" opacity="0.4" transform="translate(3, 4)" />
            {/* Canvas white paper */}
            <rect x="0" y="0" width="170" height="130" rx="12" fill="#FFFDF9" stroke="#E2D4BC" strokeWidth="2.5" />

            {/* Inner dashed frame */}
            <rect x="10" y="10" width="150" height="110" rx="8" fill="#FAF6EE" stroke="#DFBE72" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Cheerful character silhouette waiting for design */}
            <g transform="translate(85, 68)" opacity="0.75">
              {/* Head */}
              <circle cx="0" cy="-22" r="18" fill="#FDE047" opacity="0.6" stroke="#0D5C58" strokeWidth="2" strokeDasharray="3 2" />
              {/* Cute hair outline with ribbons */}
              <circle cx="-16" cy="-28" r="6" fill="#FDE047" opacity="0.5" stroke="#0D5C58" strokeWidth="1.5" strokeDasharray="2 2" />
              <circle cx="16" cy="-28" r="6" fill="#FDE047" opacity="0.5" stroke="#0D5C58" strokeWidth="1.5" strokeDasharray="2 2" />

              {/* Smiling eyes */}
              <path d="M-6 -22 Q-3 -19 0 -22" stroke="#0D5C58" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M3 -22 Q6 -19 9 -22" stroke="#0D5C58" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M-3 -15 Q0 -11 3 -15" stroke="#0D5C58" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Body silhouette */}
              <path d="M-18 6 C-18 -4 18 -4 18 6 L22 36 L-22 36 Z" fill="#E0F2FE" opacity="0.8" stroke="#0D5C58" strokeWidth="2" strokeDasharray="3 2" />

              {/* Sparkle badge */}
              <circle cx="0" cy="18" r="7" fill="#FBBF24" />
              <path d="M0 13 L0 23 M-5 18 L5 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </g>

        {/* Watercolor Palette in Foreground */}
        <g transform="translate(60, 205) rotate(-8)">
          <path
            d="M20 20 C60 0 100 20 120 45 C130 60 115 85 90 85 C80 85 75 75 60 75 C45 75 40 85 25 80 C5 75 -10 35 20 20 Z"
            fill="url(#paletteWood)"
            stroke="#927027"
            strokeWidth="1.5"
          />
          {/* Thumb hole */}
          <circle cx="95" cy="65" r="7" fill="#F5ECE1" stroke="#927027" strokeWidth="1" />

          {/* Colorful paint blobs */}
          <ellipse cx="25" cy="35" rx="6" ry="5" fill="#EF4444" />
          <ellipse cx="45" cy="25" rx="6" ry="5" fill="#F59E0B" />
          <ellipse cx="70" cy="24" rx="6" ry="5" fill="#10B981" />
          <ellipse cx="95" cy="35" rx="6" ry="5" fill="#0D5C58" />
          <ellipse cx="40" cy="55" rx="6" ry="5" fill="#3B82F6" />
          <ellipse cx="65" cy="58" rx="6" ry="5" fill="#A855F7" />
        </g>

        {/* Artist Paintbrush leaning */}
        <g transform="translate(290, 210) rotate(42)">
          {/* Wooden handle */}
          <polygon points="4,0 8,0 7,90 5,90" fill="#B45309" stroke="#78350F" strokeWidth="0.8" />
          {/* Metal ferrule */}
          <rect x="3" y="12" width="6" height="14" rx="1" fill="#CBD5E1" stroke="#64748B" strokeWidth="0.8" />
          {/* Soft bristle tip with teal paint */}
          <path d="M3 12 C3 4 9 4 9 12 Z" fill="#0D5C58" />
        </g>

        {/* Floating golden stars & magic creative dust */}
        <g fill="#F59E0B">
          <circle cx="80" cy="80" r="3" opacity="0.75" />
          <circle cx="330" cy="90" r="3.5" opacity="0.85" />
          <circle cx="315" cy="140" r="2.5" opacity="0.6" />
          <circle cx="65" cy="150" r="2" opacity="0.7" />
          {/* Sparkle 1 */}
          <path d="M320 60 L322 66 L328 68 L322 70 L320 76 L318 70 L312 68 L318 66 Z" />
        </g>
      </svg>
    </div>
  );
};
