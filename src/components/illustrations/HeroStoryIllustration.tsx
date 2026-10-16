import React from 'react';

interface HeroStoryIllustrationProps {
  className?: string;
}

export const HeroStoryIllustration: React.FC<HeroStoryIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] max-w-[540px] mx-auto select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="heroSkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF9EE" />
            <stop offset="50%" stopColor="#EBF7F5" />
            <stop offset="100%" stopColor="#E1F3F0" />
          </linearGradient>

          <linearGradient id="bookGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF7D6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFDF9" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="rainbowStream" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8585" />
            <stop offset="25%" stopColor="#FFAE52" />
            <stop offset="50%" stopColor="#FFDE59" />
            <stop offset="75%" stopColor="#7CD9A6" />
            <stop offset="100%" stopColor="#67BAE8" />
          </linearGradient>

          <radialGradient id="magicOrb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDE0" />
            <stop offset="40%" stopColor="#FDE047" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0D5C58" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft rounded container background */}
        <rect width="600" height="450" rx="36" fill="url(#heroSkyGrad)" />

        {/* Gentle background clouds */}
        <g opacity="0.75" fill="#FFFFFF">
          <ellipse cx="110" cy="90" rx="65" ry="32" />
          <circle cx="80" cy="80" r="34" />
          <circle cx="140" cy="85" r="30" />

          <ellipse cx="490" cy="110" rx="75" ry="34" />
          <circle cx="450" cy="95" r="36" />
          <circle cx="525" cy="100" r="32" />
        </g>

        {/* Twinkling Magical Stars */}
        <g fill="#F59E0B">
          {/* Star 1 */}
          <path d="M120 180 L124 192 L136 194 L127 202 L130 214 L120 207 L110 214 L113 202 L104 194 L116 192 Z" transform="scale(0.8) translate(30, 20)" />
          {/* Star 2 */}
          <path d="M480 60 L483 69 L492 70 L485 76 L487 85 L480 80 L473 85 L475 76 L468 70 L477 69 Z" />
          {/* Star 3 */}
          <path d="M220 50 L223 58 L231 60 L225 66 L227 74 L220 70 L213 74 L215 66 L209 60 L217 58 Z" transform="scale(0.9) translate(10, 10)" />
          {/* Star 4 */}
          <path d="M370 70 L373 78 L381 79 L375 85 L377 93 L370 88 L363 93 L365 85 L359 79 L367 78 Z" />
        </g>

        {/* Friendly Crescent Moon Smiling */}
        <g transform="translate(470, 40)">
          <circle cx="45" cy="45" r="36" fill="url(#magicOrb)" />
          <path
            d="M50 16 C68 28 72 54 58 72 C44 86 18 83 12 75 C32 77 52 64 50 38 C49 28 45 20 42 16 Z"
            fill="#FBBF24"
          />
          {/* Cute sleep cap */}
          <path d="M42 16 C38 6 52 0 60 4 C64 6 58 14 50 16 Z" fill="#E05B5B" />
          <circle cx="62" cy="5" r="3.5" fill="#FFFDF9" />
          {/* Moon face */}
          <circle cx="36" cy="44" r="2" fill="#78350F" />
          <path d="M34 52 Q39 56 43 51" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="40" cy="54" r="3" fill="#F87171" opacity="0.5" />
        </g>

        {/* Cozy Giant Reading Pillow / Cloud Mound */}
        <ellipse cx="300" cy="385" rx="230" ry="65" fill="#E4F1EE" />
        <ellipse cx="300" cy="380" rx="210" ry="55" fill="#FAF6EE" stroke="#E2D7C3" strokeWidth="2" />

        {/* Swirling Rainbow Ribbon from the book */}
        <path
          d="M300 280 C270 210 210 170 170 180 C130 190 140 250 200 240 C280 230 360 140 430 170 C470 190 470 240 430 250"
          stroke="url(#rainbowStream)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Child Reading the Book */}
        <g id="child-character">
          {/* Legs folded comfortably */}
          <path d="M210 360 Q240 375 270 360 Q300 375 330 360 Q370 370 385 350 L205 350 Z" fill="#0D5C58" />

          {/* Torso / Bright yellow hoodie */}
          <path d="M255 260 C250 290 245 335 245 350 L345 350 C345 335 340 290 335 260 Z" fill="#FBBF24" />

          {/* Cozy Scarf or Collar */}
          <path d="M260 255 Q295 270 330 255 Q295 245 260 255 Z" fill="#FF8585" />

          {/* Child Head */}
          <circle cx="295" cy="205" r="38" fill="#FCD8C1" />

          {/* Cute Hair (Playful Curls & Bangs) */}
          <g fill="#2B1E16">
            <ellipse cx="295" cy="180" rx="42" ry="24" />
            <circle cx="260" cy="195" r="14" />
            <circle cx="330" cy="195" r="14" />
            <circle cx="275" cy="180" r="16" />
            <circle cx="315" cy="180" r="16" />
            {/* Bangs */}
            <path d="M265 190 Q295 205 325 190 Q295 180 265 190 Z" />
          </g>

          {/* Rosy Cheeks */}
          <circle cx="278" cy="216" r="6" fill="#F87171" opacity="0.6" />
          <circle cx="314" cy="216" r="6" fill="#F87171" opacity="0.6" />

          {/* Happy Looking-down Eyes (absorbed in book) */}
          <path d="M275 208 Q281 214 286 208" stroke="#2B1E16" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M305 208 Q311 214 316 208" stroke="#2B1E16" strokeWidth="2.8" strokeLinecap="round" fill="none" />

          {/* Sweet Smiling Mouth */}
          <path d="M290 223 Q296 228 302 223" stroke="#991B1B" strokeWidth="2.4" strokeLinecap="round" fill="none" />

          {/* Arms holding the book */}
          <path d="M250 280 C240 310 260 325 275 320" stroke="#FBBF24" strokeWidth="16" strokeLinecap="round" fill="none" />
          <path d="M340 280 C350 310 330 325 315 320" stroke="#FBBF24" strokeWidth="16" strokeLinecap="round" fill="none" />
          {/* Hands */}
          <circle cx="275" cy="320" r="9" fill="#FCD8C1" />
          <circle cx="315" cy="320" r="9" fill="#FCD8C1" />
        </g>

        {/* Glowing Luminous Open Storybook */}
        <g id="open-storybook" transform="translate(295, 310)">
          {/* Glow Beam */}
          <polygon points="-80,0 -160,-170 160,-170 80,0" fill="url(#bookGlowGrad)" />

          {/* Book Binding Shadow */}
          <ellipse cx="0" cy="18" rx="88" ry="12" fill="#0A4441" opacity="0.3" />

          {/* Book Cover Base */}
          <path d="M-84 8 Q0 18 84 8 L88 22 Q0 28 -88 22 Z" fill="#0D5C58" />
          <path d="M-84 6 Q0 16 84 6 L86 12 Q0 20 -86 12 Z" fill="#DFBE72" />

          {/* Left Page (Soft cream) */}
          <path
            d="M0 12 C-35 8 -65 2 -82 0 C-82 -32 -65 -28 0 -22 Z"
            fill="#FFFDF9"
            stroke="#E2D7C3"
            strokeWidth="1.5"
          />
          {/* Right Page (Soft cream) */}
          <path
            d="M0 12 C35 8 65 2 82 0 C82 -32 65 -28 0 -22 Z"
            fill="#FFFDF9"
            stroke="#E2D7C3"
            strokeWidth="1.5"
          />

          {/* Page Lines (Subtle illustrations inside book) */}
          <line x1="-65" y1="-14" x2="-20" y2="-10" stroke="#0D5C58" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <line x1="-65" y1="-6" x2="-25" y2="-2" stroke="#0D5C58" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <line x1="-65" y1="2" x2="-35" y2="5" stroke="#0D5C58" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

          <circle cx="45" cy="-10" r="10" fill="#FF8585" opacity="0.6" />
          <line x1="20" y1="2" x2="65" y2="-2" stroke="#0D5C58" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

          {/* Golden Center Spine Ribbon Bookmark */}
          <path d="M0 -22 L0 26 L6 30 L0 20" stroke="#D97706" strokeWidth="3" fill="#FBBF24" />
        </g>

        {/* Friendly Little Companion Popout (Kancil / Little Deer) */}
        <g transform="translate(140, 270)">
          {/* Body */}
          <ellipse cx="25" cy="25" rx="20" ry="14" fill="#C26A3E" />
          {/* Head */}
          <circle cx="36" cy="12" r="12" fill="#C26A3E" />
          {/* Cute Ears */}
          <ellipse cx="32" cy="0" rx="4" ry="8" fill="#9A4E26" transform="rotate(-15 32 0)" />
          <ellipse cx="42" cy="0" rx="4" ry="8" fill="#9A4E26" transform="rotate(15 42 0)" />
          {/* Eye & Cheek */}
          <circle cx="39" cy="11" r="2.2" fill="#1C1917" />
          <circle cx="34" cy="16" r="3" fill="#FCA5A5" opacity="0.7" />
          {/* Little leaf on ear */}
          <path d="M44 2 Q50 -4 46 -8 Q40 -6 44 2 Z" fill="#22C55E" />
        </g>

        {/* Floating Sparkles & Little Origami Boat */}
        <g transform="translate(410, 210) rotate(-12)">
          <polygon points="0,18 20,4 20,18" fill="#FFFDF9" stroke="#E2D7C3" />
          <polygon points="20,4 40,18 20,18" fill="#FF8585" />
          <polygon points="-5,18 45,18 35,28 5,28" fill="#0D5C58" />
        </g>

        {/* Floating Little Heart */}
        <path
          d="M230 135 C230 130 225 125 220 125 C215 125 210 130 210 135 C210 145 220 152 220 152 C220 152 230 145 230 135 Z"
          fill="#F43F5E"
          opacity="0.85"
          transform="scale(1.2)"
        />
        <circle cx="280" cy="140" r="3" fill="#FBBF24" />
        <circle cx="330" cy="130" r="4" fill="#38BDF8" />
        <circle cx="370" cy="160" r="2.5" fill="#A855F7" />
      </svg>
    </div>
  );
};
