import React from 'react';

interface EmptyLibraryIllustrationProps {
  className?: string;
}

export const EmptyLibraryIllustration: React.FC<EmptyLibraryIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] max-w-[340px] mx-auto select-none ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="emptyShelfSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF9EE" />
            <stop offset="100%" stopColor="#F1EAD9" />
          </linearGradient>
          <linearGradient id="emptyWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8C6239" />
            <stop offset="50%" stopColor="#A07245" />
            <stop offset="100%" stopColor="#7E562F" />
          </linearGradient>
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF9D2" />
            <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft paper backing */}
        <rect width="400" height="300" rx="28" fill="url(#emptyShelfSky)" />

        {/* Hanging brass reading lamp */}
        <g transform="translate(200, 20)">
          <line x1="0" y1="0" x2="0" y2="45" stroke="#78593F" strokeWidth="2.5" />
          <path d="M-18 45 L18 45 L26 62 L-26 62 Z" fill="#D97706" />
          <circle cx="0" cy="62" r="5" fill="#FBBF24" />
          {/* Light cone */}
          <circle cx="0" cy="90" r="55" fill="url(#lampGlow)" />
        </g>

        {/* Empty Wooden Bookshelf */}
        <g transform="translate(60, 130)">
          {/* Shelf backboard */}
          <rect x="0" y="0" width="280" height="110" rx="10" fill="#EADBC8" opacity="0.6" />

          {/* Upper shelf board */}
          <rect x="-10" y="45" width="300" height="14" rx="4" fill="url(#emptyWood)" stroke="#5E4024" strokeWidth="1" />
          <rect x="-10" y="55" width="300" height="5" fill="#5E4024" opacity="0.3" />

          {/* Lower shelf board */}
          <rect x="-10" y="105" width="300" height="14" rx="4" fill="url(#emptyWood)" stroke="#5E4024" strokeWidth="1" />
          <rect x="-10" y="115" width="300" height="5" fill="#5E4024" opacity="0.3" />

          {/* Bookends & Cute Trinkets on Shelf */}
          {/* Wooden toy horse / bird */}
          <path d="M25 45 C25 30 35 25 45 25 C55 25 55 35 55 45 Z" fill="#C2410C" />
          <circle cx="48" cy="30" r="1.5" fill="#FFF" />
          <circle cx="35" cy="45" r="4" fill="#78350F" />
          <circle cx="48" cy="45" r="4" fill="#78350F" />

          {/* Little green potted plant */}
          <path d="M230 45 L245 45 L242 30 L233 30 Z" fill="#C26A3E" />
          <ellipse cx="237" cy="24" rx="8" ry="12" fill="#22C55E" />
          <ellipse cx="244" cy="27" rx="6" ry="9" fill="#16A34A" />
          <ellipse cx="231" cy="27" rx="6" ry="9" fill="#15803D" />

          {/* Center glowing book outline invitation */}
          <g transform="translate(110, 10)" opacity="0.85">
            <rect x="0" y="0" width="60" height="35" rx="4" fill="#FFFDF9" stroke="#DFBE72" strokeWidth="2" strokeDasharray="4 3" />
            <path d="M30 0 L30 35" stroke="#DFBE72" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M30 14 L30 24 M25 19 L35 19" stroke="#0D5C58" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Lower shelf waiting outline books */}
          <g transform="translate(80, 70)" opacity="0.6">
            <rect x="0" y="0" width="22" height="35" rx="3" fill="#FFFDF9" stroke="#D1B98D" strokeWidth="1.5" strokeDasharray="3 2" />
            <rect x="26" y="5" width="20" height="30" rx="3" fill="#FFFDF9" stroke="#D1B98D" strokeWidth="1.5" strokeDasharray="3 2" />
            <rect x="50" y="2" width="24" height="33" rx="3" fill="#FFFDF9" stroke="#D1B98D" strokeWidth="1.5" strokeDasharray="3 2" />
          </g>
        </g>

        {/* Friendly curious little bird perched on shelf edge */}
        <g transform="translate(245, 155)">
          <ellipse cx="15" cy="14" rx="10" ry="8" fill="#38BDF8" />
          <circle cx="20" cy="8" r="7" fill="#38BDF8" />
          <polygon points="26,8 32,10 26,12" fill="#F59E0B" />
          <circle cx="22" cy="7" r="1.5" fill="#0F172A" />
          <circle cx="12" cy="16" r="4" fill="#FBBF24" />
          <line x1="12" y1="22" x2="10" y2="28" stroke="#D97706" strokeWidth="1.5" />
          <line x1="18" y1="22" x2="19" y2="28" stroke="#D97706" strokeWidth="1.5" />
        </g>

        {/* Floating warm magical dust motes & little sparkles */}
        <g fill="#F59E0B">
          <circle cx="90" cy="90" r="2.5" opacity="0.7" />
          <circle cx="140" cy="65" r="3" opacity="0.8" />
          <circle cx="260" cy="75" r="2" opacity="0.6" />
          <circle cx="310" cy="110" r="3" opacity="0.8" />
          <path d="M125 75 L127 80 L132 82 L127 84 L125 89 L123 84 L118 82 L123 80 Z" opacity="0.7" />
          <path d="M280 85 L281.5 89 L285.5 90 L281.5 91.5 L280 95.5 L278.5 91.5 L274.5 90 L278.5 89 Z" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};
