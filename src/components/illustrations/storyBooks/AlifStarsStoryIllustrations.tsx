import React from 'react';

interface StoryIllustrationProps {
  className?: string;
  title?: string;
}

// COVER: Alif Stargazing
export const AlifCoverIllustration: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="alifSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0B132B" />
        <stop offset="50%" stopColor="#1C2541" />
        <stop offset="100%" stopColor="#3A506B" />
      </linearGradient>
      <radialGradient id="alifMoonGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="40%" stopColor="#FEF08A" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Deep Night Sky */}
    <rect width="600" height="450" fill="url(#alifSkyGrad)" />

    {/* Sparkling Stars */}
    <g fill="#FFF">
      <circle cx="80" cy="50" r="2" />
      <circle cx="150" cy="80" r="2.5" />
      <circle cx="230" cy="40" r="3" />
      <circle cx="340" cy="70" r="2" />
      <circle cx="480" cy="45" r="2.8" />
      <circle cx="530" cy="95" r="2" />
      <circle cx="100" cy="140" r="1.5" />
      <circle cx="280" cy="110" r="2" />
    </g>

    {/* Luminous Crescent Moon */}
    <g transform="translate(420, 50)">
      <circle cx="40" cy="40" r="55" fill="url(#alifMoonGlow)" />
      <path
        d="M50 15 C72 30 76 65 58 85 C40 102 12 96 6 88 C28 90 52 74 50 42 C49 30 45 20 42 15 Z"
        fill="#FDE68A"
      />
    </g>

    {/* Porch wooden railing in foreground */}
    <rect x="0" y="320" width="600" height="130" fill="#1E293B" />
    <rect x="0" y="310" width="600" height="15" fill="#334155" />
    <line x1="80" y1="325" x2="80" y2="450" stroke="#0F172A" strokeWidth="12" />
    <line x1="240" y1="325" x2="240" y2="450" stroke="#0F172A" strokeWidth="12" />
    <line x1="400" y1="325" x2="400" y2="450" stroke="#0F172A" strokeWidth="12" />
    <line x1="520" y1="325" x2="520" y2="450" stroke="#0F172A" strokeWidth="12" />

    {/* Brass Telescope on Wooden Tripod */}
    <g transform="translate(340, 210) rotate(-22)">
      {/* Tripod legs */}
      <line x1="0" y1="70" x2="-35" y2="160" stroke="#92400E" strokeWidth="6" strokeLinecap="round" />
      <line x1="0" y1="70" x2="0" y2="160" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
      <line x1="0" y1="70" x2="35" y2="160" stroke="#92400E" strokeWidth="6" strokeLinecap="round" />
      {/* Brass barrel */}
      <rect x="-80" y="25" width="160" height="24" rx="4" fill="#D97706" stroke="#FEF08A" strokeWidth="2" />
      <rect x="-85" y="22" width="18" height="30" rx="3" fill="#B45309" />
      <rect x="70" y="27" width="22" height="20" rx="2" fill="#FEF08A" />
    </g>

    {/* ALIF: Tan skin, traditional peci with gold embroidery, round glasses, cozy navy pajamas */}
    <g transform="translate(180, 200)">
      {/* Head */}
      <circle cx="45" cy="30" r="26" fill="#F0C294" />
      {/* Peci with gold rim */}
      <path d="M18 20 C18 6 72 6 72 20 Z" fill="#0F172A" />
      <line x1="18" y1="20" x2="72" y2="20" stroke="#DFBE72" strokeWidth="3.5" />

      {/* Round Glasses */}
      <circle cx="34" cy="32" r="7.5" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
      <circle cx="56" cy="32" r="7.5" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
      <line x1="41.5" y1="32" x2="48.5" y2="32" stroke="#38BDF8" strokeWidth="2.5" />

      {/* Eyes looking up wonderingly */}
      <circle cx="34" cy="30" r="3" fill="#1E293B" />
      <circle cx="56" cy="30" r="3" fill="#1E293B" />
      <path d="M40 44 Q45 49 50 44" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Torso in Star Pajamas */}
      <path d="M22 65 C22 55 68 55 68 65 L64 125 L26 125 Z" fill="#1E3A8A" />
      <circle cx="36" cy="85" r="2.5" fill="#FEF08A" />
      <circle cx="54" cy="95" r="2.5" fill="#FEF08A" />
      <circle cx="42" cy="110" r="2.5" fill="#FEF08A" />

      {/* Hands holding the telescope */}
      <path d="M68 75 Q95 70 120 72" stroke="#F0C294" strokeWidth="12" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// 1. Lampu padam satu per satu di ruang tengah
export const AlifPage1_LampsOff: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="450" fill="#1E1E24" />
    {/* Warm glow through open doorway */}
    <polygon points="120,80 260,80 340,400 60,400" fill="#FEF3C7" opacity="0.3" />
    {/* Wooden arch doorway */}
    <rect x="120" y="80" width="140" height="320" rx="8" fill="#451A03" stroke="#78350F" strokeWidth="4" />
    <rect x="135" y="95" width="110" height="290" fill="#0F172A" />

    {/* Quiet village silhouette outside window */}
    <circle cx="190" cy="130" r="16" fill="#FDE68A" />
    <path d="M135 240 L170 210 L200 240 Z" fill="#1E293B" />

    {/* Traditional Hanging Brass Lamp dimming */}
    <g transform="translate(420, 40)">
      <line x1="0" y1="0" x2="0" y2="70" stroke="#78350F" strokeWidth="3" />
      <ellipse cx="0" cy="75" rx="28" ry="12" fill="#D97706" />
      <circle cx="0" cy="90" r="25" fill="#FEF08A" opacity="0.75" />
      <circle cx="0" cy="90" r="10" fill="#FFFBEB" />
      <path d="M-10 115 L10 115 L6 135 L-6 135 Z" fill="#92400E" />
    </g>

    {/* Cozy wooden wall clock ticking */}
    <g transform="translate(60, 100)">
      <rect x="0" y="0" width="40" height="70" rx="5" fill="#78350F" />
      <circle cx="20" cy="25" r="14" fill="#FFFDF9" />
      <line x1="20" y1="25" x2="20" y2="17" stroke="#1E293B" strokeWidth="1.5" />
      <line x1="20" y1="25" x2="26" y2="25" stroke="#1E293B" strokeWidth="1.5" />
      <line x1="20" y1="42" x2="20" y2="60" stroke="#DFBE72" strokeWidth="2" />
      <circle cx="20" cy="60" r="4" fill="#DFBE72" />
    </g>
  </svg>
);

// 2. Alif di jendela memakai piyama menatap langit bertabur bintang
export const AlifPage2_WindowPajamas: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="450" fill="#0B132B" />

    {/* Velvet Starry Sky outside */}
    <g fill="#FFF">
      <circle cx="80" cy="50" r="2" />
      <circle cx="160" cy="80" r="2.5" />
      <circle cx="240" cy="40" r="3" />
      <circle cx="360" cy="65" r="2" />
      <circle cx="440" cy="45" r="2.8" />
      <circle cx="520" cy="85" r="1.8" />
      <circle cx="200" cy="120" r="1.8" />
      <circle cx="320" cy="110" r="2" />
      {/* Orion Constellation shape */}
      <line x1="160" y1="80" x2="240" y2="40" stroke="#FFF" strokeWidth="0.8" opacity="0.3" />
      <line x1="240" y1="40" x2="320" y2="110" stroke="#FFF" strokeWidth="0.8" opacity="0.3" />
    </g>

    {/* Wooden Window Frame Open */}
    <rect x="60" y="80" width="480" height="370" fill="none" stroke="#583C28" strokeWidth="22" rx="14" />
    <rect x="71" y="91" width="458" height="348" fill="none" stroke="#2B1E16" strokeWidth="6" />

    {/* ALIF: Arms resting on wooden window sill, chin cupped in hands, gazing at stars */}
    <g transform="translate(240, 230)">
      {/* Head */}
      <circle cx="50" cy="30" r="28" fill="#F0C294" />
      {/* Peci */}
      <path d="M22 18 C22 2 78 2 78 18 Z" fill="#0F172A" />
      <line x1="22" y1="18" x2="78" y2="18" stroke="#DFBE72" strokeWidth="3.5" />

      {/* Glasses */}
      <circle cx="38" cy="32" r="8" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
      <circle cx="62" cy="32" r="8" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
      <line x1="46" y1="32" x2="54" y2="32" stroke="#38BDF8" strokeWidth="2.5" />

      {/* Big reflective dark eyes */}
      <circle cx="38" cy="30" r="3.5" fill="#0F172A" />
      <circle cx="40" cy="28" r="1.2" fill="#FFF" />
      <circle cx="62" cy="30" r="3.5" fill="#0F172A" />
      <circle cx="64" cy="28" r="1.2" fill="#FFF" />
      <path d="M45 44 Q50 48 55 44" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Star Pajama Top */}
      <path d="M26 65 C26 55 74 55 74 65 L70 140 L30 140 Z" fill="#1E3A8A" />
      <circle cx="40" cy="85" r="2.5" fill="#FEF08A" />
      <circle cx="60" cy="95" r="2.5" fill="#FEF08A" />

      {/* Hands resting on window ledge */}
      <ellipse cx="38" cy="70" rx="9" ry="7" fill="#F0C294" />
      <ellipse cx="62" cy="70" rx="9" ry="7" fill="#F0C294" />
    </g>
  </svg>
);

// 3. Ayah membawakan susu hangat dan menjelaskan Rasi Bintang Pari
export const AlifPage3_FatherWarmMilk: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="450" fill="#111827" />

    {/* Southern Cross (Bintang Pari / Crux) Constellation glowing brightly in sky */}
    <g transform="translate(380, 50)">
      <line x1="60" y1="10" x2="60" y2="90" stroke="#67E8F9" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="20" y1="45" x2="95" y2="45" stroke="#67E8F9" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="60" cy="10" r="5" fill="#FEF08A" />
      <circle cx="60" cy="90" r="5.5" fill="#FEF08A" />
      <circle cx="20" cy="45" r="4.5" fill="#FEF08A" />
      <circle cx="95" cy="45" r="5" fill="#FEF08A" />
      <circle cx="75" cy="65" r="3.5" fill="#FFF" />
      {/* Label text */}
      <text x="35" y="115" fill="#A5F3FC" fontSize="12" fontFamily="serif" fontWeight="bold">Rasi Bintang Pari</text>
    </g>

    {/* Porch floor and railing */}
    <rect x="0" y="310" width="600" height="140" fill="#1F2937" />
    <rect x="0" y="300" width="600" height="12" fill="#374151" />

    {/* AYAH (Right): Gentle smile, pointing up at stars, holding warm milk mug */}
    <g transform="translate(260, 150)">
      {/* Head */}
      <circle cx="50" cy="30" r="26" fill="#E2A676" />
      <path d="M24 16 C24 4 76 4 76 16 Z" fill="#1F2937" />
      {/* Eyes & Warm smile */}
      <path d="M37 28 Q41 32 45 28" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M55 28 Q59 32 63 28" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M44 42 Q50 48 56 42" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Cardigan & Sarong */}
      <path d="M22 60 C22 50 78 50 78 60 L85 160 L15 160 Z" fill="#047857" />
      {/* Arm pointing up to Crux constellation */}
      <path d="M78 70 Q110 50 145 15" stroke="#E2A676" strokeWidth="12" strokeLinecap="round" fill="none" />

      {/* Left arm holding steaming mug */}
      <path d="M25 75 Q10 95 30 110" stroke="#E2A676" strokeWidth="11" strokeLinecap="round" fill="none" />
      <rect x="25" y="105" width="16" height="16" rx="3" fill="#FFFDF9" />
      <path d="M30 100 Q33 90 28 80" stroke="#E5E7EB" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M36 100 Q39 90 34 80" stroke="#E5E7EB" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>

    {/* ALIF (Left): Listening with rapt attention */}
    <g transform="translate(140, 210)">
      <circle cx="45" cy="25" r="24" fill="#F0C294" />
      <path d="M21 15 C21 2 69 2 69 15 Z" fill="#0F172A" />
      <circle cx="35" cy="27" r="7.5" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
      <circle cx="55" cy="27" r="7.5" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
      <circle cx="35" cy="26" r="3" fill="#0F172A" />
      <circle cx="55" cy="26" r="3" fill="#0F172A" />
      <path d="M42 38 Q46 42 50 38" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" fill="none" />

      <path d="M24 55 C24 45 66 45 66 55 L62 120 L28 120 Z" fill="#1E3A8A" />
    </g>
  </svg>
);

// 4. Alif bertanya tentang mimpi terbang ke bulan, Ayah tersenyum
export const AlifPage4_TelescopeDream: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="450" fill="#0F172A" />

    {/* Giant Golden Moon filling the sky */}
    <g transform="translate(430, 100)">
      <circle cx="0" cy="0" r="90" fill="#FEF08A" opacity="0.9" />
      <circle cx="-25" cy="-20" r="16" fill="#FDE047" opacity="0.6" />
      <circle cx="20" cy="30" r="22" fill="#FDE047" opacity="0.6" />
      <circle cx="-35" cy="35" r="12" fill="#FDE047" opacity="0.6" />
    </g>

    {/* Little paper origami rocket flying towards moon */}
    <g transform="translate(340, 150) rotate(-45)">
      <polygon points="20,0 35,25 25,25 25,45 15,45 15,25 5,25" fill="#FFFDF9" stroke="#E2E8F0" />
      <polygon points="17,45 23,45 20,60" fill="#EF4444" />
      <circle cx="20" cy="20" r="3" fill="#38BDF8" />
    </g>

    {/* Ground */}
    <rect x="0" y="320" width="600" height="130" fill="#1E293B" />

    {/* Ayah lovingly patting Alif's peci */}
    <g transform="translate(160, 190)">
      {/* Alif */}
      <circle cx="50" cy="30" r="24" fill="#F0C294" />
      <path d="M26 20 C26 7 74 7 74 20 Z" fill="#0F172A" />
      <line x1="26" y1="20" x2="74" y2="20" stroke="#DFBE72" strokeWidth="3" />
      <circle cx="40" cy="32" r="7.5" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
      <circle cx="60" cy="32" r="7.5" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
      <path d="M45 42 Q50 48 55 42" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M28 60 C28 50 72 50 72 60 L68 130 L32 130 Z" fill="#1E3A8A" />

      {/* Ayah's Hand resting gently on Alif's peci */}
      <path d="M85 -10 Q65 5 45 7" stroke="#E2A676" strokeWidth="12" strokeLinecap="round" fill="none" />
      <ellipse cx="45" cy="7" rx="10" ry="6" fill="#E2A676" />
    </g>
  </svg>
);

// 5. Alif mengucap doa tidur di tempat tidur nyaman
export const AlifPage5_BedtimePrayer: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="450" fill="#1E1E2F" />

    {/* Warm Night Lamp Light on Bedside Table */}
    <circle cx="120" cy="180" r="90" fill="#FEF08A" opacity="0.25" />
    <g transform="translate(100, 200)">
      <rect x="0" y="30" width="40" height="80" rx="4" fill="#78350F" />
      {/* Lamp base & shade */}
      <ellipse cx="20" cy="30" rx="16" ry="6" fill="#D97706" />
      <polygon points="5,25 35,25 28,0 12,0" fill="#FEF3C7" stroke="#FDE047" strokeWidth="1" />
      {/* Glass of milk */}
      <rect x="25" y="15" width="10" height="14" rx="2" fill="#FFFDF9" opacity="0.9" />
    </g>

    {/* Wooden Bedstead */}
    <rect x="180" y="160" width="380" height="220" rx="14" fill="#583C28" />

    {/* Fluffy Bedding & Star Patchwork Quilt */}
    <path d="M190 250 L550 250 L550 370 L190 370 Z" fill="#1E3A8A" />
    {/* Quilt Stars */}
    <g fill="#FEF08A" opacity="0.75">
      <circle cx="240" cy="280" r="5" />
      <circle cx="310" cy="320" r="5" />
      <circle cx="380" cy="280" r="5" />
      <circle cx="450" cy="330" r="5" />
      <circle cx="510" cy="280" r="5" />
    </g>

    {/* Soft Pillows */}
    <ellipse cx="270" cy="225" rx="45" ry="24" fill="#FFFDF9" stroke="#E2E8F0" strokeWidth="2" />

    {/* ALIF: Tucked in, hands cupped in prayer, peaceful smile */}
    <g transform="translate(240, 170)">
      {/* Head resting on pillow */}
      <circle cx="30" cy="30" r="24" fill="#F0C294" />
      <path d="M8 20 C8 7 52 7 52 20 Z" fill="#0F172A" />
      <circle cx="20" cy="30" r="7.5" stroke="#38BDF8" strokeWidth="2" fill="none" />
      <circle cx="40" cy="30" r="7.5" stroke="#38BDF8" strokeWidth="2" fill="none" />
      {/* Serene closed praying eyes */}
      <path d="M16 30 Q20 34 24 30" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M36 30 Q40 34 44 30" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M26 40 Q30 44 34 40" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Two little hands cupped in bedtime prayer */}
      <g transform="translate(18, 55)">
        <ellipse cx="8" cy="10" rx="6" ry="9" fill="#F0C294" transform="rotate(-15 8 10)" />
        <ellipse cx="16" cy="10" rx="6" ry="9" fill="#F0C294" transform="rotate(15 16 10)" />
      </g>
    </g>
  </svg>
);

// 6. Alif terlelap tidur dengan perahu kertas bercahaya berlayar di mimpi
export const AlifPage6_DreamBoat: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0B132B" />
        <stop offset="50%" stopColor="#1E1B4B" />
        <stop offset="100%" stopColor="#312E81" />
      </linearGradient>
    </defs>

    {/* Dreamy Twilight Space */}
    <rect width="600" height="450" fill="url(#dreamGrad)" />

    {/* Swirling Starlight Ribbon */}
    <path
      d="M50 320 Q200 180 340 240 T580 120"
      stroke="#67E8F9"
      strokeWidth="18"
      strokeLinecap="round"
      opacity="0.3"
      fill="none"
    />
    <path
      d="M50 320 Q200 180 340 240 T580 120"
      stroke="#FEF08A"
      strokeWidth="4"
      strokeDasharray="6 4"
      opacity="0.75"
      fill="none"
    />

    {/* Giant Smiling Crescent Moon Cradle */}
    <g transform="translate(120, 80)">
      <path
        d="M60 20 C90 40 100 90 70 125 C40 155 5 145 -5 135 C30 140 70 115 65 70 C63 50 56 35 50 20 Z"
        fill="#FDE68A"
      />
    </g>

    {/* Glowing Luminous Paper Origami Boat sailing on Stardust */}
    <g transform="translate(280, 160) rotate(-8)">
      {/* Boat Glow */}
      <ellipse cx="50" cy="50" rx="75" ry="35" fill="#FEF08A" opacity="0.3" />
      {/* Boat Hull */}
      <polygon points="0,50 100,50 80,75 20,75" fill="#0D5C58" stroke="#DFBE72" strokeWidth="2" />
      {/* Sails */}
      <polygon points="50,5 50,50 15,50" fill="#FFFDF9" stroke="#E2E8F0" strokeWidth="2" />
      <polygon points="50,15 85,50 50,50" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />

      {/* Tiny Alif sleeping blissfully in boat */}
      <circle cx="50" cy="40" r="10" fill="#F0C294" />
      <path d="M44 34 C44 26 56 26 56 34 Z" fill="#0F172A" />
      <path d="M47 41 Q50 43 53 41" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </g>

    {/* Bedtime Goodnight Message Star Sparkles */}
    <g fill="#FEF08A">
      <circle cx="80" cy="180" r="4" />
      <circle cx="480" cy="80" r="4.5" />
      <circle cx="520" cy="220" r="3.5" />
      <circle cx="210" cy="40" r="3" />
      <circle cx="390" cy="320" r="4" />
    </g>
  </svg>
);
