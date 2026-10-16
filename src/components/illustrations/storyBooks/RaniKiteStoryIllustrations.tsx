import React from 'react';

interface StoryIllustrationProps {
  className?: string;
  title?: string;
}

// 1. Rani bersiap bermain di halaman rumah
export const RaniPage1_Prep: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="raniP1Sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="40%" stopColor="#FFFBEB" />
        <stop offset="100%" stopColor="#DCFCE7" />
      </linearGradient>
      <linearGradient id="raniP1Grass" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#86EFAC" />
        <stop offset="100%" stopColor="#22C55E" />
      </linearGradient>
    </defs>

    {/* Sky & Morning Glow */}
    <rect width="600" height="450" fill="url(#raniP1Sky)" />

    {/* Golden Morning Sun */}
    <circle cx="110" cy="90" r="50" fill="#FCD34D" opacity="0.4" />
    <circle cx="110" cy="90" r="35" fill="#F59E0B" />
    <path d="M110 90 L260 250 L210 290 Z" fill="#FFFBEB" opacity="0.25" />

    {/* Traditional Cottage Porch in Background */}
    <g transform="translate(320, 100)">
      <polygon points="120,40 240,90 10,90" fill="#A84C32" />
      <rect x="30" y="90" width="190" height="130" fill="#FDF6EB" stroke="#E2D4BC" strokeWidth="2" />
      {/* Window */}
      <rect x="50" y="110" width="40" height="50" rx="4" fill="#BAE6FD" stroke="#78350F" strokeWidth="3" />
      <line x1="70" y1="110" x2="70" y2="160" stroke="#78350F" strokeWidth="2" />
      <line x1="50" y1="135" x2="90" y2="135" stroke="#78350F" strokeWidth="2" />
      {/* Wooden Door */}
      <rect x="140" y="110" width="45" height="110" fill="#885A3C" rx="2" />
      {/* Porch wooden railing */}
      <line x1="10" y1="200" x2="210" y2="200" stroke="#78350F" strokeWidth="6" />
      <line x1="40" y1="200" x2="40" y2="240" stroke="#78350F" strokeWidth="4" />
      <line x1="90" y1="200" x2="90" y2="240" stroke="#78350F" strokeWidth="4" />
      <line x1="140" y1="200" x2="140" y2="240" stroke="#78350F" strokeWidth="4" />
    </g>

    {/* Garden Lawn & Flowers */}
    <path d="M0 310 Q300 270 600 310 L600 450 L0 450 Z" fill="url(#raniP1Grass)" />

    {/* Blooming Tropical Flowers (Melati & Mawar) */}
    <g transform="translate(40, 310)">
      <circle cx="20" cy="40" r="12" fill="#F43F5E" />
      <circle cx="20" cy="40" r="4" fill="#FDE047" />
      <circle cx="50" cy="50" r="10" fill="#FB923C" />
      <circle cx="50" cy="50" r="3.5" fill="#FFF" />
      <circle cx="80" cy="35" r="8" fill="#F43F5E" />
    </g>

    {/* Flying Butterflies */}
    <g transform="translate(150, 200) rotate(-15)">
      <ellipse cx="10" cy="10" rx="8" ry="12" fill="#FBBF24" />
      <ellipse cx="22" cy="10" rx="8" ry="12" fill="#FBBF24" />
      <ellipse cx="16" cy="14" rx="2" ry="6" fill="#3E2723" />
    </g>

    {/* RANI: Getting ready, tying her shoe on garden stone */}
    <g transform="translate(180, 210)">
      {/* Stepping stone Rani is resting foot on */}
      <ellipse cx="75" cy="195" rx="35" ry="14" fill="#94A3B8" stroke="#64748B" strokeWidth="2" />

      {/* Legs & Shoes */}
      {/* Left leg standing */}
      <rect x="25" y="125" width="14" height="60" rx="6" fill="#FCD8C1" />
      <rect x="22" y="175" width="22" height="16" rx="5" fill="#FFFDF9" stroke="#0284C7" strokeWidth="2" />
      {/* Right leg raised onto stone */}
      <path d="M48 115 L68 150 L68 185" stroke="#FCD8C1" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="62" y="178" width="24" height="15" rx="5" fill="#FFFDF9" stroke="#0284C7" strokeWidth="2" />
      {/* Cyan shoe laces */}
      <path d="M68 180 Q74 174 80 180" stroke="#0284C7" strokeWidth="2" fill="none" />

      {/* Navy shorts */}
      <path d="M18 100 L58 100 L56 128 L36 128 L34 116 L18 126 Z" fill="#0D5C58" />

      {/* Cyan Cloud Shirt */}
      <path d="M12 45 C12 35 64 35 64 45 L58 105 L18 105 Z" fill="#38BDF8" />
      {/* Fluffy white cloud patch */}
      <ellipse cx="38" cy="70" rx="14" ry="8" fill="#FFFDF9" />
      <circle cx="32" cy="67" r="7" fill="#FFFDF9" />
      <circle cx="44" cy="67" r="6" fill="#FFFDF9" />

      {/* Rani's Head & Face */}
      <circle cx="38" cy="12" r="24" fill="#FCD8C1" />
      {/* Rosy cheeks */}
      <circle cx="27" cy="20" r="4.5" fill="#F87171" opacity="0.7" />
      <circle cx="49" cy="20" r="4.5" fill="#F87171" opacity="0.7" />
      {/* Cheerful eyes looking down at shoe */}
      <path d="M25 14 Q30 18 34 14" stroke="#2B1E16" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M42 14 Q47 18 51 14" stroke="#2B1E16" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Big smile */}
      <path d="M33 24 Q38 29 43 24" stroke="#991B1B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Hair (Playful Bangs) */}
      <path d="M14 6 C14 -12 62 -12 62 6 C50 -2 26 -2 14 6 Z" fill="#2B1E16" />
      <path d="M18 6 Q38 16 58 6" stroke="#2B1E16" strokeWidth="6" fill="none" />

      {/* Left Pigtail & Red Ribbon */}
      <g transform="translate(12, 0)">
        <ellipse cx="-4" cy="10" rx="8" ry="14" fill="#2B1E16" transform="rotate(25)" />
        <circle cx="0" cy="2" r="4.5" fill="#E11D48" />
        <path d="M-3 2 L-8 6 M0 4 L-2 10" stroke="#E11D48" strokeWidth="2.5" />
      </g>

      {/* Right Pigtail & Red Ribbon */}
      <g transform="translate(64, 0)">
        <ellipse cx="4" cy="10" rx="8" ry="14" fill="#2B1E16" transform="rotate(-25)" />
        <circle cx="0" cy="2" r="4.5" fill="#E11D48" />
        <path d="M3 2 L8 6 M0 4 L2 10" stroke="#E11D48" strokeWidth="2.5" />
      </g>

      {/* Arms reaching down to tie laces */}
      <path d="M16 50 Q30 85 64 165" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" fill="none" />
      <circle cx="64" cy="165" r="6" fill="#FCD8C1" />
    </g>
  </svg>
);

// 2. Rani menemukan layang-layang berwarna-warni bersama Kakek
export const RaniPage2_FindKite: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="porchBackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="60%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FED7AA" />
      </linearGradient>
      <linearGradient id="rainbowKiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="25%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#FACC15" />
        <stop offset="75%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>

    {/* Porch Background */}
    <rect width="600" height="450" fill="url(#porchBackGrad)" />

    {/* Wooden porch pillars and roof */}
    <path d="M0 60 L600 60 L540 100 L60 100 Z" fill="#78350F" />
    <rect x="50" y="60" width="22" height="340" fill="#92400E" />
    <rect x="528" y="60" width="22" height="340" fill="#92400E" />

    {/* Bamboo blinds hanging */}
    <rect x="120" y="60" width="180" height="70" fill="#D97706" opacity="0.6" />
    <line x1="120" y1="80" x2="300" y2="80" stroke="#78350F" strokeWidth="1" />
    <line x1="120" y1="100" x2="300" y2="100" stroke="#78350F" strokeWidth="1" />

    {/* Wooden Deck Floor */}
    <polygon points="0,320 600,320 600,450 0,450" fill="#D97706" />
    <line x1="0" y1="365" x2="600" y2="365" stroke="#B45309" strokeWidth="3" />
    <line x1="0" y1="410" x2="600" y2="410" stroke="#B45309" strokeWidth="3" />

    {/* Bamboo Crafting Basket & Tools on floor */}
    <g transform="translate(80, 310)">
      <ellipse cx="30" cy="40" rx="30" ry="16" fill="#A16207" />
      {/* Bamboo strips */}
      <line x1="10" y1="20" x2="60" y2="50" stroke="#FEF08A" strokeWidth="3" />
      <line x1="15" y1="15" x2="55" y2="45" stroke="#FEF08A" strokeWidth="3" />
      {/* String Spool */}
      <rect x="55" y="45" width="22" height="14" rx="3" fill="#FFFDF9" stroke="#0D5C58" strokeWidth="2" />
      <line x1="60" y1="45" x2="60" y2="59" stroke="#E11D48" strokeWidth="2" />
      <line x1="66" y1="45" x2="66" y2="59" stroke="#E11D48" strokeWidth="2" />
      <line x1="72" y1="45" x2="72" y2="59" stroke="#E11D48" strokeWidth="2" />
    </g>

    {/* KAKEK (Grandfather): Kind elder, batik shirt, glasses */}
    <g transform="translate(170, 160)">
      {/* Torso in Batik */}
      <path d="M20 70 C20 55 80 55 80 70 L90 180 L10 180 Z" fill="#9A3412" />
      {/* Batik motif dots */}
      <circle cx="35" cy="95" r="4" fill="#FDE047" opacity="0.7" />
      <circle cx="65" cy="95" r="4" fill="#FDE047" opacity="0.7" />
      <circle cx="50" cy="125" r="5" fill="#FDE047" opacity="0.7" />
      <circle cx="35" cy="155" r="4" fill="#FDE047" opacity="0.7" />
      <circle cx="65" cy="155" r="4" fill="#FDE047" opacity="0.7" />

      {/* Head */}
      <circle cx="50" cy="30" r="26" fill="#FCD8C1" />
      {/* Gray hair */}
      <path d="M24 24 C24 8 76 8 76 24 C72 14 28 14 24 24 Z" fill="#E2E8F0" />
      <path d="M24 26 C22 36 22 46 25 50" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
      <path d="M76 26 C78 36 78 46 75 50" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />

      {/* Glasses */}
      <circle cx="40" cy="28" r="6" stroke="#475569" strokeWidth="2" fill="none" />
      <circle cx="60" cy="28" r="6" stroke="#475569" strokeWidth="2" fill="none" />
      <line x1="46" y1="28" x2="54" y2="28" stroke="#475569" strokeWidth="2" />

      {/* Gentle Smiling Eyes & Wrinkle */}
      <path d="M37 28 Q40 31 43 28" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M57 28 Q60 31 63 28" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M44 42 Q50 48 56 42" stroke="#991B1B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Left arm holding kite frame */}
      <path d="M20 75 Q40 100 85 110" stroke="#FCD8C1" strokeWidth="13" strokeLinecap="round" fill="none" />
    </g>

    {/* THE MAGNIFICENT RAINBOW KITE (Wau Pelangi) */}
    <g transform="translate(300, 150) rotate(-10)">
      {/* Glow */}
      <polygon points="50,0 95,70 50,140 5,70" fill="#FEF08A" opacity="0.4" transform="scale(1.15) translate(-6, -8)" />
      {/* Kite Diamond Body */}
      <polygon points="50,0 95,70 50,140 5,70" fill="url(#rainbowKiteGrad)" stroke="#FEF08A" strokeWidth="3" />
      {/* Bamboo Cross Ribs */}
      <line x1="50" y1="0" x2="50" y2="140" stroke="#FEF08A" strokeWidth="3.5" />
      <path d="M5 70 Q50 55 95 70" stroke="#FEF08A" strokeWidth="3.5" fill="none" />
      {/* Dancing Ribbon Tails */}
      <path d="M50 140 Q65 170 45 200 T60 250" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="56" cy="170" r="5" fill="#F59E0B" />
      <circle cx="48" cy="205" r="5" fill="#10B981" />
      <circle cx="58" cy="240" r="5" fill="#0284C7" />
    </g>

    {/* RANI: Gasping in delight with hands clapping */}
    <g transform="translate(420, 200)">
      {/* Head */}
      <circle cx="40" cy="18" r="24" fill="#FCD8C1" />
      {/* Rosy cheeks */}
      <circle cx="28" cy="24" r="5" fill="#F87171" opacity="0.75" />
      <circle cx="52" cy="24" r="5" fill="#F87171" opacity="0.75" />
      {/* Sparkling happy open eyes */}
      <circle cx="33" cy="16" r="3.5" fill="#2B1E16" />
      <circle cx="34" cy="15" r="1.2" fill="#FFF" />
      <circle cx="47" cy="16" r="3.5" fill="#2B1E16" />
      <circle cx="48" cy="15" r="1.2" fill="#FFF" />
      {/* Wide happy open mouth */}
      <ellipse cx="40" cy="28" rx="6" ry="7" fill="#E11D48" />

      {/* Hair (Twin pigtails & red ribbons) */}
      <path d="M16 12 C16 -6 64 -6 64 12 C52 4 28 4 16 12 Z" fill="#2B1E16" />
      {/* Pigtails */}
      <ellipse cx="10" cy="15" rx="8" ry="14" fill="#2B1E16" transform="rotate(-20)" />
      <circle cx="14" cy="8" r="4.5" fill="#E11D48" />
      <ellipse cx="70" cy="15" rx="8" ry="14" fill="#2B1E16" transform="rotate(20)" />
      <circle cx="66" cy="8" r="4.5" fill="#E11D48" />

      {/* Torso: Cyan cloud shirt */}
      <path d="M18 50 C18 40 62 40 62 50 L58 105 L22 105 Z" fill="#38BDF8" />
      <ellipse cx="40" cy="74" rx="12" ry="7" fill="#FFFDF9" />

      {/* Shorts */}
      <path d="M22 105 L58 105 L55 135 L25 135 Z" fill="#0D5C58" />
      {/* Legs */}
      <rect x="28" y="135" width="10" height="40" fill="#FCD8C1" rx="4" />
      <rect x="42" y="135" width="10" height="40" fill="#FCD8C1" rx="4" />
      <rect x="26" y="170" width="16" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />
      <rect x="40" y="170" width="16" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />

      {/* Arms raised in excitement towards kite */}
      <path d="M20 55 Q-5 45 -10 65" stroke="#FCD8C1" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M60 55 Q40 45 10 50" stroke="#FCD8C1" strokeWidth="10" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// 3. Rani berjalan ke lapangan
export const RaniPage3_WalkField: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="walkSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7DD3FC" />
        <stop offset="60%" stopColor="#BAE6FD" />
        <stop offset="100%" stopColor="#FEF08A" />
      </linearGradient>
      <linearGradient id="padiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A7F3D0" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
    </defs>

    {/* Bright Morning Sky */}
    <rect width="600" height="450" fill="url(#walkSky)" />

    {/* Rolling Hill Silhouettes */}
    <path d="M-20 280 Q140 180 320 250 T620 210 L620 450 L-20 450 Z" fill="#86EFAC" opacity="0.6" />
    <path d="M-20 310 Q200 230 420 300 T620 260 L620 450 L-20 450 Z" fill="url(#padiGrad)" />

    {/* Distant Palm Trees */}
    <g transform="translate(100, 160)">
      <path d="M20 120 Q10 50 30 0" stroke="#78350F" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="0" r="24" fill="#15803D" />
      <circle cx="18" cy="-5" r="18" fill="#16A34A" />
      <circle cx="42" cy="5" r="18" fill="#14532D" />
    </g>

    {/* Winding Village Stone Path */}
    <path d="M120 450 Q260 360 480 320 L550 340 Q320 390 180 450 Z" fill="#E2D4BC" stroke="#C5B59D" strokeWidth="2" />
    {/* Stepping Stones */}
    <ellipse cx="220" cy="410" rx="18" ry="7" fill="#CBD5E1" />
    <ellipse cx="310" cy="375" rx="16" ry="6" fill="#CBD5E1" />
    <ellipse cx="400" cy="350" rx="14" ry="5" fill="#CBD5E1" />

    {/* RANI: Walking merrily holding the kite spool in hands, kite carried over shoulder */}
    <g transform="translate(230, 190)">
      {/* Kite over shoulder */}
      <g transform="translate(20, 20) rotate(-25)">
        <polygon points="35,0 65,45 35,90 5,45" fill="#EF4444" stroke="#FDE047" strokeWidth="2" />
        <polygon points="35,0 5,45 35,90" fill="#3B82F6" />
        <polygon points="35,0 65,45 35,90" fill="#F59E0B" opacity="0.5" />
        <path d="M35 90 Q45 110 30 130" stroke="#E11D48" strokeWidth="2.5" fill="none" />
      </g>

      {/* Rani Head */}
      <circle cx="40" cy="25" r="22" fill="#FCD8C1" />
      <circle cx="30" cy="32" r="4.5" fill="#F87171" opacity="0.75" />
      <circle cx="50" cy="32" r="4.5" fill="#F87171" opacity="0.75" />
      {/* Eyes looking forward cheerfully */}
      <circle cx="35" cy="24" r="3" fill="#2B1E16" />
      <circle cx="46" cy="24" r="3" fill="#2B1E16" />
      <path d="M36 34 Q41 38 46 34" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Hair (Twin pigtails bounce) */}
      <path d="M18 18 C18 0 62 0 62 18 C50 10 28 10 18 18 Z" fill="#2B1E16" />
      <ellipse cx="12" cy="18" rx="8" ry="14" fill="#2B1E16" transform="rotate(-30)" />
      <circle cx="16" cy="10" r="4.5" fill="#E11D48" />
      <ellipse cx="68" cy="18" rx="8" ry="14" fill="#2B1E16" transform="rotate(30)" />
      <circle cx="64" cy="10" r="4.5" fill="#E11D48" />

      {/* Shirt */}
      <path d="M22 55 C22 45 58 45 58 55 L55 105 L25 105 Z" fill="#38BDF8" />
      <ellipse cx="40" cy="76" rx="10" ry="6" fill="#FFFDF9" />

      {/* Shorts */}
      <path d="M25 105 L55 105 L58 132 L22 132 Z" fill="#0D5C58" />

      {/* Legs walking energetically */}
      <line x1="30" y1="132" x2="18" y2="175" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" />
      <rect x="10" y="170" width="18" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="50" y1="132" x2="62" y2="175" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" />
      <rect x="56" y="170" width="18" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />

      {/* Arms holding string spool */}
      <path d="M25 65 Q40 85 55 70" stroke="#FCD8C1" strokeWidth="10" strokeLinecap="round" fill="none" />
      <rect x="42" y="65" width="18" height="12" rx="3" fill="#D97706" />
      <line x1="45" y1="65" x2="45" y2="77" stroke="#FFF" strokeWidth="1.5" />
      <line x1="50" y1="65" x2="50" y2="77" stroke="#FFF" strokeWidth="1.5" />
    </g>

    {/* Cheerful Puppy / Little Bird hopping alongside */}
    <g transform="translate(340, 360)">
      <ellipse cx="20" cy="15" rx="16" ry="11" fill="#F59E0B" />
      <circle cx="30" cy="8" r="9" fill="#F59E0B" />
      <circle cx="33" cy="7" r="1.5" fill="#1E293B" />
      <polygon points="36,7 42,9 36,11" fill="#EA580C" />
      <ellipse cx="14" cy="5" rx="3" ry="8" fill="#B45309" transform="rotate(30)" />
    </g>
  </svg>
);

// 4. Rani mencoba menerbangkan layang-layang
export const RaniPage4_TryFly: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hillWindSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="60%" stopColor="#BAE6FD" />
        <stop offset="100%" stopColor="#FEF9C3" />
      </linearGradient>
    </defs>

    {/* Sky */}
    <rect width="600" height="450" fill="url(#hillWindSky)" />

    {/* Wind gusts / Swirling air currents */}
    <path d="M50 120 Q180 80 320 110 T560 90" stroke="#FFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" fill="none" />
    <path d="M120 160 Q260 130 400 150 T580 130" stroke="#FFF" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />

    {/* Grassy Hilltop */}
    <path d="M-10 330 Q180 250 400 320 T620 290 L620 450 L-10 450 Z" fill="#4ADE80" />
    <path d="M-10 380 Q220 310 450 370 T620 350 L620 450 L-10 450 Z" fill="#22C55E" />

    {/* RANI: Running fast across the hill, body leaning forward, looking up at kite */}
    <g transform="translate(160, 240)">
      {/* Head */}
      <circle cx="45" cy="16" r="22" fill="#FCD8C1" />
      <circle cx="35" cy="22" r="4.5" fill="#F87171" opacity="0.75" />
      <circle cx="53" cy="22" r="4.5" fill="#F87171" opacity="0.75" />
      {/* Focused determined eyes */}
      <path d="M33 14 Q37 11 41 14" stroke="#2B1E16" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M49 14 Q53 11 57 14" stroke="#2B1E16" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Excited open mouth */}
      <path d="M39 26 Q45 32 51 26" stroke="#991B1B" strokeWidth="2.4" strokeLinecap="round" fill="none" />

      {/* Pigtails streaming backwards in the wind */}
      <path d="M18 10 C18 -8 60 -8 60 10 C50 2 28 2 18 10 Z" fill="#2B1E16" />
      <ellipse cx="6" cy="10" rx="16" ry="7" fill="#2B1E16" transform="rotate(-15)" />
      <circle cx="16" cy="6" r="4.5" fill="#E11D48" />
      <ellipse cx="4" cy="22" rx="16" ry="7" fill="#2B1E16" transform="rotate(-10)" />
      <circle cx="16" cy="18" r="4.5" fill="#E11D48" />

      {/* Torso leaning */}
      <path d="M25 45 C25 35 60 35 60 45 L52 95 L18 95 Z" fill="#38BDF8" transform="rotate(15 40 70)" />
      <ellipse cx="45" cy="68" rx="9" ry="5" fill="#FFFDF9" />

      {/* Shorts */}
      <path d="M22 95 L56 95 L50 120 L15 120 Z" fill="#0D5C58" transform="rotate(15 35 105)" />

      {/* Running legs */}
      <line x1="25" y1="110" x2="-5" y2="155" stroke="#FCD8C1" strokeWidth="12" strokeLinecap="round" />
      <rect x="-18" y="150" width="20" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="50" y1="110" x2="75" y2="148" stroke="#FCD8C1" strokeWidth="12" strokeLinecap="round" />
      <rect x="70" y="142" width="20" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />

      {/* Arm holding string high up */}
      <line x1="52" y1="55" x2="85" y2="5" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" />
      <circle cx="85" cy="5" r="6" fill="#FCD8C1" />

      {/* Trailing arm for balance */}
      <line x1="25" y1="58" x2="-8" y2="75" stroke="#FCD8C1" strokeWidth="10" strokeLinecap="round" />
    </g>

    {/* Kite Taut String rising into the wind */}
    <line x1="245" y1="245" x2="385" y2="120" stroke="#FFF" strokeWidth="2" strokeDasharray="4 2" />

    {/* Rainbow Kite Lifting off gracefully */}
    <g transform="translate(385, 50) rotate(25)">
      <polygon points="45,0 85,55 45,110 5,55" fill="#EF4444" stroke="#FDE047" strokeWidth="2.5" />
      <polygon points="45,0 5,55 45,110" fill="#3B82F6" />
      <polygon points="45,0 85,55 45,110" fill="#10B981" opacity="0.6" />
      <polygon points="45,25 65,55 45,85 25,55" fill="#F59E0B" />
      {/* Ribbons fluttering */}
      <path d="M45 110 Q65 140 35 170 T55 210" stroke="#E11D48" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

// 5. Layang-layang tersangkut dan Rani mencari solusi
export const RaniPage5_KiteStuck: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="stuckSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="60%" stopColor="#E0F2FE" />
        <stop offset="100%" stopColor="#FEF3C7" />
      </linearGradient>
    </defs>

    <rect width="600" height="450" fill="url(#stuckSky)" />

    {/* Big Jambu Air Tree Trunk & Leaves */}
    <g transform="translate(320, 0)">
      {/* Sturdy trunk */}
      <path d="M120 450 Q135 260 160 140 Q180 80 240 20" stroke="#78350F" strokeWidth="36" fill="none" strokeLinecap="round" />
      {/* Branch reaching left */}
      <path d="M145 200 Q100 160 20 150" stroke="#78350F" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M80 155 Q40 120 10 90" stroke="#78350F" strokeWidth="12" fill="none" strokeLinecap="round" />

      {/* Dense leafy canopies */}
      <circle cx="20" cy="140" r="45" fill="#15803D" />
      <circle cx="60" cy="110" r="50" fill="#16A34A" />
      <circle cx="-10" cy="100" r="40" fill="#22C55E" />
      <circle cx="160" cy="80" r="65" fill="#15803D" />
      <circle cx="220" cy="50" r="60" fill="#16A34A" />

      {/* Red Jambu Fruits */}
      <circle cx="35" cy="155" r="7" fill="#E11D48" />
      <circle cx="75" cy="130" r="6" fill="#E11D48" />
      <circle cx="10" cy="120" r="6" fill="#E11D48" />

      {/* KITE SNAGGED IN THE BRANCH */}
      <g transform="translate(15, 95) rotate(45)">
        <polygon points="35,0 65,45 35,90 5,45" fill="#EF4444" stroke="#FDE047" strokeWidth="2" />
        <polygon points="35,0 5,45 35,90" fill="#3B82F6" />
        {/* Tangled ribbon wrapped around branch */}
        <path d="M35 90 Q15 80 0 100 Q-15 120 10 130" stroke="#E11D48" strokeWidth="3" fill="none" />
        <line x1="35" y1="45" x2="-30" y2="180" stroke="#FFF" strokeWidth="1.5" strokeDasharray="3 2" />
      </g>
    </g>

    {/* Ground */}
    <path d="M0 350 Q300 320 600 350 L600 450 L0 450 Z" fill="#4ADE80" />

    {/* RANI: Standing under tree, head tilted back, finger on chin in thought */}
    <g transform="translate(180, 220)">
      {/* String hanging down near Rani */}
      <path d="M125 55 Q90 110 55 125" stroke="#FFF" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />

      {/* Head tilted up */}
      <g transform="translate(40, 20) rotate(-15)">
        <circle cx="0" cy="0" r="24" fill="#FCD8C1" />
        <circle cx="-10" cy="6" r="4.5" fill="#F87171" opacity="0.75" />
        <circle cx="10" cy="6" r="4.5" fill="#F87171" opacity="0.75" />
        {/* Thoughtful eyes looking up at branch */}
        <circle cx="-5" cy="-4" r="3" fill="#2B1E16" />
        <circle cx="7" cy="-4" r="3" fill="#2B1E16" />
        {/* Perplexed cute mouth */}
        <ellipse cx="2" cy="10" rx="3.5" ry="4" fill="#991B1B" />

        {/* Pigtails */}
        <path d="M-22 -8 C-22 -24 22 -24 22 -8 C12 -16 -12 -16 -22 -8 Z" fill="#2B1E16" />
        <ellipse cx="-26" cy="4" rx="8" ry="14" fill="#2B1E16" transform="rotate(15)" />
        <circle cx="-22" cy="-4" r="4.5" fill="#E11D48" />
        <ellipse cx="26" cy="4" rx="8" ry="14" fill="#2B1E16" transform="rotate(-15)" />
        <circle cx="22" cy="-4" r="4.5" fill="#E11D48" />
      </g>

      {/* Torso */}
      <path d="M18 55 C18 45 62 45 62 55 L58 110 L22 110 Z" fill="#38BDF8" />
      <ellipse cx="40" cy="78" rx="10" ry="6" fill="#FFFDF9" />

      {/* Shorts */}
      <path d="M22 110 L58 110 L56 138 L24 138 Z" fill="#0D5C58" />

      {/* Legs */}
      <rect x="28" y="138" width="11" height="45" rx="5" fill="#FCD8C1" />
      <rect x="42" y="138" width="11" height="45" rx="5" fill="#FCD8C1" />
      <rect x="25" y="176" width="17" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />
      <rect x="40" y="176" width="17" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />

      {/* Right arm with finger on chin thinking */}
      <path d="M58 60 Q65 40 45 36" stroke="#FCD8C1" strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* Left arm akimbo / on hip */}
      <path d="M20 60 Q5 75 20 85" stroke="#FCD8C1" strokeWidth="9" strokeLinecap="round" fill="none" />
    </g>

    {/* Little thought bubble with solution idea */}
    <g transform="translate(130, 160)" opacity="0.85">
      <circle cx="10" cy="10" r="4" fill="#FFF" />
      <circle cx="25" cy="0" r="7" fill="#FFF" />
      <circle cx="55" cy="-20" r="22" fill="#FFF" stroke="#DFBE72" strokeWidth="1.5" />
      {/* Bamboo pole icon inside bubble */}
      <line x1="43" y1="-10" x2="68" y2="-30" stroke="#A16207" strokeWidth="3" strokeLinecap="round" />
      <path d="M68 -30 L73 -32" stroke="#22C55E" strokeWidth="2" />
    </g>
  </svg>
);

// 6. Seorang teman membantu Rani (Budi with bamboo pole)
export const RaniPage6_FriendHelps: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="helpSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#67E8F9" />
        <stop offset="60%" stopColor="#CFFAFE" />
        <stop offset="100%" stopColor="#FEF9C3" />
      </linearGradient>
    </defs>

    <rect width="600" height="450" fill="url(#helpSky)" />

    {/* Tree Trunk & Branches */}
    <g transform="translate(420, 0)">
      <path d="M60 450 Q75 220 90 90" stroke="#78350F" strokeWidth="30" fill="none" strokeLinecap="round" />
      <path d="M75 140 Q20 120 -60 110" stroke="#78350F" strokeWidth="14" fill="none" strokeLinecap="round" />
      <circle cx="-50" cy="100" r="45" fill="#15803D" />
      <circle cx="0" cy="80" r="50" fill="#16A34A" />

      {/* Kite coming loose from branch */}
      <g transform="translate(-70, 75) rotate(20)">
        <polygon points="35,0 65,45 35,90 5,45" fill="#EF4444" stroke="#FDE047" strokeWidth="2" />
        <polygon points="35,0 5,45 35,90" fill="#3B82F6" />
        <path d="M35 90 Q45 115 30 140" stroke="#E11D48" strokeWidth="3" fill="none" />
      </g>
    </g>

    {/* Ground */}
    <path d="M0 340 Q300 310 600 340 L600 450 L0 450 Z" fill="#22C55E" />

    {/* BUDI: Helping with a long bamboo pole */}
    <g transform="translate(180, 200)">
      {/* Bamboo Pole pointing up to tree */}
      <line x1="45" y1="90" x2="185" y2="-90" stroke="#CA8A04" strokeWidth="5" strokeLinecap="round" />
      <line x1="185" y1="-90" x2="188" y2="-94" stroke="#16A34A" strokeWidth="3" />

      {/* Budi Head */}
      <circle cx="40" cy="25" r="22" fill="#FCD8C1" />
      {/* Curly Dark Hair */}
      <circle cx="24" cy="14" r="8" fill="#1E293B" />
      <circle cx="36" cy="8" r="9" fill="#1E293B" />
      <circle cx="50" cy="10" r="8" fill="#1E293B" />
      <circle cx="58" cy="18" r="7" fill="#1E293B" />

      <circle cx="30" cy="30" r="3.5" fill="#F87171" opacity="0.6" />
      <circle cx="48" cy="30" r="3.5" fill="#F87171" opacity="0.6" />
      {/* Encouraging eyes */}
      <circle cx="35" cy="24" r="3" fill="#1E293B" />
      <circle cx="47" cy="24" r="3" fill="#1E293B" />
      <path d="M36 34 Q41 38 46 34" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Green Explorer Vest & Shirt */}
      <path d="M22 55 C22 45 58 45 58 55 L55 110 L25 110 Z" fill="#15803D" />
      {/* Brown Vest Over */}
      <path d="M20 55 L35 55 L32 108 L20 108 Z" fill="#B45309" />
      <path d="M60 55 L45 55 L48 108 L60 108 Z" fill="#B45309" />

      {/* Shorts */}
      <path d="M24 110 L56 110 L54 138 L22 138 Z" fill="#78350F" />
      <rect x="26" y="138" width="10" height="42" fill="#FCD8C1" rx="4" />
      <rect x="42" y="138" width="10" height="42" fill="#FCD8C1" rx="4" />
      <rect x="23" y="174" width="17" height="12" rx="4" fill="#334155" />
      <rect x="40" y="174" width="17" height="12" rx="4" fill="#334155" />

      {/* Strong arms lifting bamboo pole */}
      <path d="M22 62 Q35 75 48 88" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" fill="none" />
      <path d="M58 60 Q70 50 85 45" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" fill="none" />
    </g>

    {/* RANI: Cheering alongside Budi, guiding the bamboo pole */}
    <g transform="translate(80, 215)">
      {/* Head */}
      <circle cx="40" cy="22" r="22" fill="#FCD8C1" />
      <circle cx="30" cy="28" r="4.5" fill="#F87171" opacity="0.75" />
      <circle cx="50" cy="28" r="4.5" fill="#F87171" opacity="0.75" />
      <circle cx="34" cy="20" r="3" fill="#2B1E16" />
      <circle cx="46" cy="20" r="3" fill="#2B1E16" />
      <path d="M35 30 Q40 36 45 30" stroke="#991B1B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Pigtails */}
      <path d="M18 14 C18 -2 62 -2 62 14 C50 6 28 6 18 14 Z" fill="#2B1E16" />
      <ellipse cx="12" cy="18" rx="8" ry="14" fill="#2B1E16" transform="rotate(-20)" />
      <circle cx="16" cy="10" r="4.5" fill="#E11D48" />
      <ellipse cx="68" cy="18" rx="8" ry="14" fill="#2B1E16" transform="rotate(20)" />
      <circle cx="64" cy="10" r="4.5" fill="#E11D48" />

      {/* Cloud Shirt & Shorts */}
      <path d="M22 50 C22 40 58 40 58 50 L55 105 L25 105 Z" fill="#38BDF8" />
      <ellipse cx="40" cy="72" rx="10" ry="6" fill="#FFFDF9" />
      <path d="M24 105 L56 105 L54 132 L22 132 Z" fill="#0D5C58" />

      {/* Legs */}
      <rect x="26" y="132" width="10" height="44" fill="#FCD8C1" rx="4" />
      <rect x="42" y="132" width="10" height="44" fill="#FCD8C1" rx="4" />
      <rect x="23" y="170" width="16" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />
      <rect x="40" y="170" width="16" height="12" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />

      {/* Hands holding Budi's pole gently to steady it */}
      <path d="M55 58 Q80 65 95 62" stroke="#FCD8C1" strokeWidth="9" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// 7. Layang-layang terbang tinggi di langit
export const RaniPage7_FlyingHigh: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="highSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="40%" stopColor="#38BDF8" />
        <stop offset="80%" stopColor="#BAE6FD" />
        <stop offset="100%" stopColor="#FEF08A" />
      </linearGradient>
      <linearGradient id="highKiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="25%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#FACC15" />
        <stop offset="75%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>

    {/* Sky & Clouds */}
    <rect width="600" height="450" fill="url(#highSky)" />

    {/* Bright Golden Sun */}
    <circle cx="480" cy="80" r="45" fill="#FDE047" opacity="0.4" />
    <circle cx="480" cy="80" r="32" fill="#FBBF24" />

    {/* Billowing White Fluffy Clouds */}
    <g fill="#FFFDF9" opacity="0.9">
      <ellipse cx="120" cy="120" rx="70" ry="35" />
      <circle cx="90" cy="105" r="35" />
      <circle cx="160" cy="115" r="30" />

      <ellipse cx="430" cy="180" rx="80" ry="38" />
      <circle cx="390" cy="165" r="38" />
      <circle cx="475" cy="175" r="32" />
    </g>

    {/* THE MAGNIFICENT WAU KITE FLYING HIGH & MAJESTIC */}
    <g transform="translate(240, 70) rotate(14)">
      {/* Kite Body */}
      <polygon points="65,0 120,80 65,160 10,80" fill="url(#highKiteGrad)" stroke="#FEF08A" strokeWidth="4" />
      {/* Golden ribs */}
      <line x1="65" y1="0" x2="65" y2="160" stroke="#FFF" strokeWidth="3.5" />
      <path d="M10 80 Q65 60 120 80" stroke="#FFF" strokeWidth="3.5" fill="none" />
      {/* Long dancing ribbon tail streaming across the sky */}
      <path
        d="M65 160 C85 200 45 240 75 280 C105 320 60 360 85 410"
        stroke="#E11D48"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Colorful tail bows */}
      <circle cx="70" cy="210" r="6" fill="#F59E0B" />
      <circle cx="55" cy="255" r="6" fill="#10B981" />
      <circle cx="75" cy="300" r="6" fill="#0284C7" />
      <circle cx="70" cy="350" r="6" fill="#A855F7" />
    </g>

    {/* Kite string reaching down to the hill */}
    <path d="M305 150 Q240 280 180 380" stroke="#FFF" strokeWidth="2" strokeDasharray="5 3" fill="none" opacity="0.85" />

    {/* Distant Hills in Background */}
    <path d="M0 360 Q200 310 400 350 T600 330 L600 450 L0 450 Z" fill="#22C55E" />
    <path d="M0 390 Q240 340 480 390 L600 380 L600 450 L0 450 Z" fill="#15803D" />

    {/* Rani & Budi on Hilltop cheering and celebrating */}
    <g transform="translate(140, 340)">
      {/* Rani */}
      <g transform="translate(0, 0)">
        <circle cx="20" cy="12" r="10" fill="#FCD8C1" />
        <ellipse cx="14" cy="8" rx="4" ry="7" fill="#2B1E16" />
        <ellipse cx="26" cy="8" rx="4" ry="7" fill="#2B1E16" />
        {/* Cyan shirt */}
        <path d="M12 22 L28 22 L26 46 L14 46 Z" fill="#38BDF8" />
        <rect x="15" y="46" width="10" height="8" fill="#0D5C58" />
        <line x1="16" y1="54" x2="14" y2="70" stroke="#FCD8C1" strokeWidth="4" />
        <line x1="24" y1="54" x2="26" y2="70" stroke="#FCD8C1" strokeWidth="4" />
        {/* Arm holding string spool */}
        <line x1="26" y1="26" x2="40" y2="10" stroke="#FCD8C1" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Budi waving both hands */}
      <g transform="translate(45, 2)">
        <circle cx="20" cy="12" r="10" fill="#FCD8C1" />
        <circle cx="20" cy="7" r="9" fill="#1E293B" />
        {/* Vest */}
        <path d="M12 22 L28 22 L26 46 L14 46 Z" fill="#B45309" />
        <rect x="15" y="46" width="10" height="8" fill="#78350F" />
        <line x1="16" y1="54" x2="14" y2="70" stroke="#FCD8C1" strokeWidth="4" />
        <line x1="24" y1="54" x2="26" y2="70" stroke="#FCD8C1" strokeWidth="4" />
        {/* Both hands raised cheering */}
        <line x1="13" y1="25" x2="4" y2="8" stroke="#FCD8C1" strokeWidth="4" strokeLinecap="round" />
        <line x1="27" y1="25" x2="36" y2="8" stroke="#FCD8C1" strokeWidth="4" strokeLinecap="round" />
      </g>
    </g>

    {/* Sparkles of wonder in the sky */}
    <g fill="#FDE047">
      <circle cx="180" cy="90" r="3" />
      <circle cx="390" cy="110" r="3.5" />
      <circle cx="490" cy="140" r="3" />
    </g>
  </svg>
);

// 8. Rani dan temannya menikmati sore dengan bahagia
export const RaniPage8_SunsetHappy: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="35%" stopColor="#FB923C" />
        <stop offset="70%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#FEF08A" />
      </linearGradient>
      <linearGradient id="sunsetHills" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#84CC16" />
        <stop offset="100%" stopColor="#4D7C0F" />
      </linearGradient>
    </defs>

    {/* Golden Twilight Sunset Sky */}
    <rect width="600" height="450" fill="url(#sunsetSky)" />

    {/* Huge Warm Setting Sun on Horizon */}
    <circle cx="300" cy="270" r="110" fill="#FEF08A" opacity="0.6" />
    <circle cx="300" cy="270" r="75" fill="#FFFBEB" />

    {/* Evening Mountain Silhouettes */}
    <path d="M-20 290 Q120 190 260 260 T580 220 L620 310 L620 450 L-20 450 Z" fill="#A16207" opacity="0.4" />

    {/* Rolling Sunset Meadow */}
    <path d="M-10 320 Q280 270 610 320 L610 450 L-10 450 Z" fill="url(#sunsetHills)" />

    {/* Rainbow Kite Resting Peacefully on the Grass */}
    <g transform="translate(420, 290) rotate(35)">
      <polygon points="35,0 65,45 35,90 5,45" fill="#EF4444" stroke="#FEF08A" strokeWidth="2" />
      <polygon points="35,0 5,45 35,90" fill="#3B82F6" />
      <path d="M35 90 Q50 110 35 130" stroke="#E11D48" strokeWidth="2.5" fill="none" />
      {/* String Spool next to it */}
      <rect x="75" y="45" width="20" height="12" rx="3" fill="#D97706" />
    </g>

    {/* RANI & BUDI: Sitting side by side comfortably on the grass, drinking warm tea and laughing */}
    <g transform="translate(170, 240)">
      {/* Cozy picnic blanket / cloth */}
      <ellipse cx="110" cy="140" rx="95" ry="25" fill="#FAF5E8" stroke="#D1B98D" strokeWidth="2" />
      {/* Small snack plate with traditional kue */}
      <ellipse cx="110" cy="138" rx="18" ry="8" fill="#E2E8F0" />
      <circle cx="106" cy="136" r="3.5" fill="#15803D" />
      <circle cx="114" cy="136" r="3.5" fill="#E11D48" />

      {/* RANI (Left): Sitting relaxed, smile, holding a tea cup */}
      <g transform="translate(30, 20)">
        {/* Head */}
        <circle cx="35" cy="22" r="22" fill="#FCD8C1" />
        <circle cx="25" cy="28" r="4.5" fill="#F87171" opacity="0.75" />
        <circle cx="45" cy="28" r="4.5" fill="#F87171" opacity="0.75" />
        {/* Happy smiling eyes (contented closed arcs) */}
        <path d="M22 20 Q27 25 32 20" stroke="#2B1E16" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M38 20 Q43 25 48 20" stroke="#2B1E16" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M30 30 Q35 36 40 30" stroke="#991B1B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

        {/* Pigtails */}
        <path d="M14 14 C14 -2 56 -2 56 14 C46 6 24 6 14 14 Z" fill="#2B1E16" />
        <ellipse cx="8" cy="18" rx="8" ry="14" fill="#2B1E16" transform="rotate(-20)" />
        <circle cx="12" cy="10" r="4.5" fill="#E11D48" />
        <ellipse cx="62" cy="18" rx="8" ry="14" fill="#2B1E16" transform="rotate(20)" />
        <circle cx="58" cy="10" r="4.5" fill="#E11D48" />

        {/* Cloud Shirt */}
        <path d="M18 50 C18 42 52 42 52 50 L50 95 L20 95 Z" fill="#38BDF8" />
        <ellipse cx="35" cy="68" rx="9" ry="5" fill="#FFFDF9" />

        {/* Crossed sitting legs in navy shorts */}
        <path d="M16 95 L54 95 L65 118 L5 118 Z" fill="#0D5C58" />
        <ellipse cx="35" cy="118" rx="28" ry="9" fill="#FCD8C1" />
        <rect x="10" y="112" width="14" height="10" rx="3" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />
        <rect x="46" y="112" width="14" height="10" rx="3" fill="#FFFDF9" stroke="#0284C7" strokeWidth="1.5" />

        {/* Hands holding tea cup */}
        <path d="M22 62 Q35 80 48 72" stroke="#FCD8C1" strokeWidth="8" strokeLinecap="round" fill="none" />
        <rect x="42" y="68" width="10" height="9" rx="2" fill="#FFFDF9" stroke="#0D5C58" strokeWidth="1" />
      </g>

      {/* BUDI (Right): Sitting comfortably, smiling at Rani */}
      <g transform="translate(115, 20)">
        {/* Head */}
        <circle cx="35" cy="22" r="22" fill="#FCD8C1" />
        <circle cx="20" cy="12" r="8" fill="#1E293B" />
        <circle cx="32" cy="6" r="9" fill="#1E293B" />
        <circle cx="46" cy="8" r="8" fill="#1E293B" />
        <circle cx="54" cy="16" r="7" fill="#1E293B" />

        <circle cx="26" cy="28" r="4" fill="#F87171" opacity="0.6" />
        <circle cx="44" cy="28" r="4" fill="#F87171" opacity="0.6" />
        <path d="M24 20 Q29 25 34 20" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M40 20 Q45 25 50 20" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M32 30 Q37 36 42 30" stroke="#991B1B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

        {/* Brown Explorer Vest */}
        <path d="M18 50 C18 42 52 42 52 50 L50 95 L20 95 Z" fill="#B45309" />
        <path d="M16 95 L54 95 L65 118 L5 118 Z" fill="#78350F" />
        <ellipse cx="35" cy="118" rx="28" ry="9" fill="#FCD8C1" />
        <rect x="10" y="112" width="14" height="10" rx="3" fill="#334155" />
        <rect x="46" y="112" width="14" height="10" rx="3" fill="#334155" />

        {/* Hands resting on knees */}
        <path d="M20 62 Q10 85 24 100" stroke="#FCD8C1" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M50 62 Q60 85 46 100" stroke="#FCD8C1" strokeWidth="8" strokeLinecap="round" fill="none" />
      </g>
    </g>

    {/* Evening birds flying in V formation into sunset */}
    <g stroke="#78350F" strokeWidth="2" fill="none" strokeLinecap="round">
      <path d="M110 90 Q115 84 120 90 Q125 84 130 90" />
      <path d="M135 105 Q140 99 145 105 Q150 99 155 105" />
      <path d="M100 110 Q105 104 110 110 Q115 104 120 110" />
    </g>
  </svg>
);

// COVER: Featured Cover for "Rani dan Layang-Layang Pelangi"
export const RaniCoverIllustration: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="raniCoverSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="35%" stopColor="#38BDF8" />
        <stop offset="70%" stopColor="#BAE6FD" />
        <stop offset="100%" stopColor="#FEF9C3" />
      </linearGradient>
      <linearGradient id="coverKiteRainbow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="25%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#FACC15" />
        <stop offset="75%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>

    {/* Brilliant Blue Sky */}
    <rect width="600" height="450" fill="url(#raniCoverSky)" />

    {/* Sunburst Beams */}
    <g fill="#FEF08A" opacity="0.35">
      <polygon points="300,160 220,0 280,0" />
      <polygon points="300,160 360,0 420,0" />
      <polygon points="300,160 500,20 540,60" />
      <polygon points="300,160 60,30 100,0" />
    </g>

    {/* Rolling Green Hills & Flower Meadows */}
    <path d="M-20 310 Q160 230 360 300 T620 270 L620 450 L-20 450 Z" fill="#4ADE80" />
    <path d="M-20 360 Q190 290 430 350 T620 330 L620 450 L-20 450 Z" fill="#22C55E" />

    {/* Giant Splendid Rainbow Kite in Sky */}
    <g transform="translate(320, 50) rotate(16)">
      <polygon points="65,0 120,75 65,150 10,75" fill="url(#coverKiteRainbow)" stroke="#FEF08A" strokeWidth="4" />
      <line x1="65" y1="0" x2="65" y2="150" stroke="#FFF" strokeWidth="3.5" />
      <path d="M10 75 Q65 55 120 75" stroke="#FFF" strokeWidth="3.5" fill="none" />
      {/* Fluttering ribbon tails */}
      <path d="M65 150 Q85 190 50 230 T75 300" stroke="#E11D48" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="70" cy="195" r="5" fill="#F59E0B" />
      <circle cx="56" cy="245" r="5" fill="#10B981" />
      <circle cx="72" cy="285" r="5" fill="#0284C7" />
    </g>

    {/* Kite string connecting to Rani */}
    <path d="M365 140 Q280 250 225 315" stroke="#FFF" strokeWidth="2.5" strokeDasharray="5 3" fill="none" />

    {/* RANI: Cheerful, smiling, waving one hand and holding string in other */}
    <g transform="translate(180, 210)">
      {/* Head */}
      <circle cx="45" cy="25" r="26" fill="#FCD8C1" />
      <circle cx="32" cy="32" r="5.5" fill="#F87171" opacity="0.8" />
      <circle cx="58" cy="32" r="5.5" fill="#F87171" opacity="0.8" />
      {/* Big joyful eyes */}
      <circle cx="37" cy="22" r="4" fill="#2B1E16" />
      <circle cx="39" cy="20" r="1.5" fill="#FFF" />
      <circle cx="53" cy="22" r="4" fill="#2B1E16" />
      <circle cx="55" cy="20" r="1.5" fill="#FFF" />
      {/* Radiant happy smile */}
      <path d="M37 34 Q45 44 53 34" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Hair (Pigtails & Big Red Ribbons) */}
      <path d="M18 16 C18 -6 72 -6 72 16 C60 6 30 6 18 16 Z" fill="#2B1E16" />
      <ellipse cx="12" cy="20" rx="10" ry="16" fill="#2B1E16" transform="rotate(-25)" />
      <circle cx="16" cy="10" r="6" fill="#E11D48" />
      <ellipse cx="78" cy="20" rx="10" ry="16" fill="#2B1E16" transform="rotate(25)" />
      <circle cx="74" cy="10" r="6" fill="#E11D48" />

      {/* Cyan Cloud Shirt */}
      <path d="M22 60 C22 48 68 48 68 60 L64 120 L26 120 Z" fill="#38BDF8" />
      <ellipse cx="45" cy="88" rx="12" ry="7" fill="#FFFDF9" />
      <circle cx="39" cy="85" r="6" fill="#FFFDF9" />
      <circle cx="51" cy="85" r="5.5" fill="#FFFDF9" />

      {/* Shorts */}
      <path d="M26 120 L64 120 L60 150 L24 150 Z" fill="#0D5C58" />

      {/* Standing legs */}
      <rect x="30" y="150" width="12" height="48" rx="5" fill="#FCD8C1" />
      <rect x="48" y="150" width="12" height="48" rx="5" fill="#FCD8C1" />
      <rect x="26" y="190" width="19" height="14" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="2" />
      <rect x="46" y="190" width="19" height="14" rx="4" fill="#FFFDF9" stroke="#0284C7" strokeWidth="2" />

      {/* Right arm waving hello */}
      <path d="M68 65 Q95 45 105 20" stroke="#FCD8C1" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="105" cy="20" r="7" fill="#FCD8C1" />

      {/* Left arm holding string */}
      <path d="M24 65 Q35 95 45 105" stroke="#FCD8C1" strokeWidth="12" strokeLinecap="round" fill="none" />
    </g>

    {/* Wildflowers and Gold Sparkles */}
    <g fill="#F59E0B">
      <circle cx="70" cy="410" r="5" fill="#FF7675" />
      <circle cx="120" cy="425" r="6" fill="#FDCB6E" />
      <circle cx="480" cy="415" r="6" fill="#FD79A8" />
      <circle cx="540" cy="425" r="5" fill="#FEEAA7" />
    </g>
  </svg>
);
