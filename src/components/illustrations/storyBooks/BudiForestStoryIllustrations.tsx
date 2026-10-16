import React from 'react';

interface StoryIllustrationProps {
  className?: string;
  title?: string;
}

// COVER: Budi & Little Kancil in the Rainforest
export const BudiCoverIllustration: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="budiCoverSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#86EFAC" />
        <stop offset="50%" stopColor="#DCFCE7" />
        <stop offset="100%" stopColor="#FEF3C7" />
      </linearGradient>
    </defs>

    <rect width="600" height="450" fill="url(#budiCoverSky)" />

    {/* Rainforest Canopy & Giant Trees */}
    <path d="M50 0 L70 450 L30 450 L20 0 Z" fill="#583C28" />
    <path d="M530 0 L560 450 L490 450 L480 0 Z" fill="#451A03" />
    <circle cx="60" cy="50" r="110" fill="#15803D" />
    <circle cx="230" cy="30" r="120" fill="#16A34A" />
    <circle cx="430" cy="20" r="130" fill="#15803D" />
    <circle cx="560" cy="60" r="115" fill="#14532D" />

    {/* Sunbeams filtering through leaves */}
    <polygon points="120,0 230,450 170,450 70,0" fill="#FEF08A" opacity="0.3" />
    <polygon points="360,0 480,450 410,450 310,0" fill="#FEF08A" opacity="0.25" />

    {/* Forest Ground */}
    <path d="M0 340 Q300 290 600 340 L600 450 L0 450 Z" fill="#22C55E" />
    <path d="M0 380 Q300 330 600 380 L600 450 L0 450 Z" fill="#15803D" />

    {/* River Stones & Ferns */}
    <ellipse cx="260" cy="390" rx="45" ry="18" fill="#94A3B8" stroke="#64748B" strokeWidth="2" />
    <ellipse cx="340" cy="405" rx="35" ry="14" fill="#94A3B8" stroke="#64748B" strokeWidth="2" />

    {/* BUDI: Explorer vest, green shirt, crouching down to pet Kancil */}
    <g transform="translate(160, 220)">
      {/* Head */}
      <circle cx="40" cy="25" r="24" fill="#FCD8C1" />
      {/* Curly Dark Hair */}
      <circle cx="22" cy="14" r="8" fill="#1E293B" />
      <circle cx="35" cy="8" r="9" fill="#1E293B" />
      <circle cx="50" cy="10" r="9" fill="#1E293B" />
      <circle cx="58" cy="18" r="8" fill="#1E293B" />
      <circle cx="28" cy="30" r="4" fill="#F87171" opacity="0.6" />
      <circle cx="48" cy="30" r="4" fill="#F87171" opacity="0.6" />
      <circle cx="34" cy="24" r="3.5" fill="#1E293B" />
      <circle cx="48" cy="24" r="3.5" fill="#1E293B" />
      <path d="M35 34 Q41 40 47 34" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Explorer Vest & Shirt */}
      <path d="M22 55 C22 45 58 45 58 55 L55 110 L25 110 Z" fill="#16A34A" />
      <path d="M20 55 L34 55 L30 108 L20 108 Z" fill="#B45309" />
      <path d="M60 55 L46 55 L50 108 L60 108 Z" fill="#B45309" />

      {/* Crouching legs */}
      <path d="M25 110 Q10 135 25 160" stroke="#FCD8C1" strokeWidth="12" strokeLinecap="round" fill="none" />
      <rect x="18" y="152" width="22" height="14" rx="4" fill="#78350F" />
      <path d="M55 110 Q70 135 55 160" stroke="#FCD8C1" strokeWidth="12" strokeLinecap="round" fill="none" />
      <rect x="48" y="152" width="22" height="14" rx="4" fill="#78350F" />

      {/* Arm extending forward gently to offer fruit/leaf to Kancil */}
      <path d="M55 65 Q85 80 115 78" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" fill="none" />
      <circle cx="115" cy="78" r="6" fill="#FCD8C1" />
      {/* Green leaf in hand */}
      <path d="M115 78 Q125 65 135 70 Q125 85 115 78 Z" fill="#22C55E" />
    </g>

    {/* ADORABLE KANCIL (Mousedeer) FRIEND */}
    <g transform="translate(310, 260)">
      {/* Body */}
      <ellipse cx="60" cy="50" rx="38" ry="24" fill="#C2410C" />
      {/* White chest & belly spots */}
      <circle cx="48" cy="54" r="4.5" fill="#FFFDF9" />
      <circle cx="62" cy="55" r="4" fill="#FFFDF9" />
      <circle cx="75" cy="52" r="3.5" fill="#FFFDF9" />
      {/* Head */}
      <ellipse cx="26" cy="34" rx="16" ry="18" fill="#C2410C" />
      {/* Big Cute Ears */}
      <ellipse cx="18" cy="18" rx="6" ry="12" fill="#9A3412" transform="rotate(-15 18 18)" />
      <ellipse cx="34" cy="18" rx="6" ry="12" fill="#9A3412" transform="rotate(15 34 18)" />
      {/* Big friendly dark eye */}
      <circle cx="22" cy="32" r="4" fill="#1C1917" />
      <circle cx="24" cy="30" r="1.5" fill="#FFF" />
      <ellipse cx="12" cy="38" rx="3" ry="2.5" fill="#1C1917" />
      {/* Little smile */}
      <path d="M16 42 Q20 45 24 42" stroke="#7C2D12" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Dainty Legs */}
      <line x1="42" y1="68" x2="40" y2="105" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="54" y1="68" x2="55" y2="102" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="75" y1="68" x2="74" y2="105" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="88" y1="68" x2="90" y2="100" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 1. Budi berjalan gembira melewati jalan setapak desa ke arah hutan
export const BudiPage1_MorningPath: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="budiP1Sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#BAE6FD" />
        <stop offset="70%" stopColor="#DCFCE7" />
        <stop offset="100%" stopColor="#FEF9C3" />
      </linearGradient>
    </defs>

    <rect width="600" height="450" fill="url(#budiP1Sky)" />
    <circle cx="120" cy="90" r="38" fill="#FDE047" />

    {/* Village trail and tropical vegetation */}
    <path d="M0 320 Q300 270 600 320 L600 450 L0 450 Z" fill="#22C55E" />
    <path d="M180 450 Q280 360 480 320 L550 335 Q340 380 240 450 Z" fill="#D97706" opacity="0.8" />

    {/* Budi walking merrily with compass and backpack */}
    <g transform="translate(240, 210)">
      {/* Backpack on back */}
      <rect x="10" y="55" width="18" height="35" rx="5" fill="#78350F" />
      {/* Head */}
      <circle cx="35" cy="25" r="22" fill="#FCD8C1" />
      <circle cx="22" cy="14" r="8" fill="#1E293B" />
      <circle cx="35" cy="8" r="9" fill="#1E293B" />
      <circle cx="48" cy="12" r="8" fill="#1E293B" />
      <circle cx="32" cy="24" r="3.5" fill="#1E293B" />
      <circle cx="44" cy="24" r="3.5" fill="#1E293B" />
      <path d="M33 34 Q38 38 43 34" stroke="#991B1B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Vest */}
      <path d="M22 55 L52 55 L50 105 L24 105 Z" fill="#16A34A" />
      <path d="M20 55 L32 55 L30 105 L20 105 Z" fill="#B45309" />
      <path d="M54 55 L42 55 L44 105 L54 105 Z" fill="#B45309" />

      {/* Legs walking */}
      <line x1="28" y1="105" x2="16" y2="155" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" />
      <rect x="10" y="150" width="18" height="12" rx="4" fill="#78350F" />
      <line x1="46" y1="105" x2="58" y2="155" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" />
      <rect x="52" y="150" width="18" height="12" rx="4" fill="#78350F" />

      {/* Hand holding wooden compass */}
      <path d="M22 65 Q40 85 55 75" stroke="#FCD8C1" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="55" cy="75" r="7" fill="#DFBE72" stroke="#78350F" strokeWidth="1.5" />
    </g>
  </svg>
);

// 2. Di balik semak pakis terdengar kruk... kruk...
export const BudiPage2_RustlingFerns: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="450" fill="#14532D" />

    {/* Lush rainforest ferns & caladium foliage in foreground */}
    <g fill="#16A34A">
      <path d="M80 450 Q100 240 180 180 Q120 280 110 450 Z" />
      <path d="M30 450 Q60 270 120 220 Q70 310 50 450 Z" />
      <path d="M520 450 Q500 230 420 170 Q480 270 490 450 Z" fill="#15803D" />
      <path d="M570 450 Q540 260 480 210 Q530 300 550 450 Z" fill="#15803D" />
    </g>

    {/* Big Elephant Ear / Caladium Leaves */}
    <path d="M280 320 C240 240 320 180 380 220 C420 260 380 340 280 320 Z" fill="#22C55E" opacity="0.85" />
    <path d="M280 320 L350 240" stroke="#FFF" strokeWidth="2" opacity="0.6" />

    {/* Sound effect speech cue "Kruk... kruk..." */}
    <g transform="translate(330, 200)">
      <rect x="0" y="0" width="115" height="34" rx="12" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
      <polygon points="15,34 25,34 18,44" fill="#FEF08A" />
      <text x="14" y="22" fill="#78350F" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Kruk... kruk...</text>
    </g>

    {/* Budi peeking with hand to ear */}
    <g transform="translate(140, 220)">
      <circle cx="35" cy="25" r="22" fill="#FCD8C1" />
      <circle cx="22" cy="14" r="8" fill="#1E293B" />
      <circle cx="35" cy="8" r="9" fill="#1E293B" />
      <circle cx="48" cy="12" r="8" fill="#1E293B" />
      {/* Listening hand by ear */}
      <path d="M48 60 Q65 40 58 25" stroke="#FCD8C1" strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Wide curious eyes */}
      <circle cx="30" cy="24" r="3.5" fill="#1E293B" />
      <circle cx="42" cy="24" r="3.5" fill="#1E293B" />
      <ellipse cx="36" cy="34" rx="3" ry="3.5" fill="#991B1B" />
      <path d="M22 55 L52 55 L50 110 L24 110 Z" fill="#B45309" />
    </g>
  </svg>
);

// 3. Kancil kecil bermata bundar berteduh dekat batu kali, kaki terselip akar
export const BudiPage3_FoundKancil: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="450" fill="#064E3B" />

    {/* Forest Creek / River with clear water */}
    <path d="M0 260 Q300 220 600 260 L600 370 Q300 330 0 370 Z" fill="#38BDF8" opacity="0.6" />
    <path d="M0 340 Q300 300 600 340 L600 450 L0 450 Z" fill="#166534" />

    {/* River Boulder */}
    <ellipse cx="340" cy="330" rx="60" ry="28" fill="#64748B" stroke="#475569" strokeWidth="3" />

    {/* Tangled Tree Root */}
    <path d="M300 340 Q325 325 350 350 Q365 365 380 345" stroke="#78350F" strokeWidth="12" strokeLinecap="round" fill="none" />

    {/* Little Kancil with leg caught in root looking up pleadingly */}
    <g transform="translate(300, 270)">
      <ellipse cx="45" cy="40" rx="30" ry="20" fill="#C2410C" />
      <ellipse cx="20" cy="26" rx="14" ry="15" fill="#C2410C" />
      <ellipse cx="14" cy="12" rx="5" ry="10" fill="#9A3412" transform="rotate(-15)" />
      <ellipse cx="26" cy="12" rx="5" ry="10" fill="#9A3412" transform="rotate(15)" />
      {/* Big dark pleading eyes with white shine */}
      <circle cx="17" cy="25" r="4.5" fill="#1C1917" />
      <circle cx="19" cy="23" r="1.8" fill="#FFF" />
      {/* Caught leg in the root */}
      <line x1="30" y1="55" x2="35" y2="82" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
    </g>

    {/* Budi approaching gently with open hands */}
    <g transform="translate(140, 240)">
      <circle cx="35" cy="25" r="22" fill="#FCD8C1" />
      <circle cx="22" cy="14" r="8" fill="#1E293B" />
      <circle cx="35" cy="8" r="9" fill="#1E293B" />
      <circle cx="48" cy="12" r="8" fill="#1E293B" />
      <path d="M32 32 Q37 36 42 32" stroke="#991B1B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M22 55 L52 55 L50 110 L24 110 Z" fill="#B45309" />
      {/* Reaching hands out soothingly */}
      <path d="M50 65 Q75 75 95 72" stroke="#FCD8C1" strokeWidth="10" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// 4. Budi perlahan melepaskan akar, kancil melompat gembira
export const BudiPage4_GentleRescue: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="450" fill="#047857" />

    {/* Forest Clearing */}
    <path d="M0 330 Q300 290 600 330 L600 450 L0 450 Z" fill="#22C55E" />

    {/* Budi kneeling down, smiling, hands having just untangled root */}
    <g transform="translate(180, 230)">
      <circle cx="35" cy="25" r="22" fill="#FCD8C1" />
      <circle cx="22" cy="14" r="8" fill="#1E293B" />
      <circle cx="35" cy="8" r="9" fill="#1E293B" />
      <circle cx="48" cy="12" r="8" fill="#1E293B" />
      <circle cx="28" cy="30" r="3.5" fill="#F87171" opacity="0.6" />
      <circle cx="46" cy="30" r="3.5" fill="#F87171" opacity="0.6" />
      <path d="M31 34 Q37 40 43 34" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      <path d="M22 55 L52 55 L50 105 L24 105 Z" fill="#B45309" />
      {/* Kneeling */}
      <path d="M24 105 L50 105 L60 140 L15 140 Z" fill="#78350F" />
      {/* Thumbs up / gentle happy hand */}
      <path d="M50 65 Q70 80 85 75" stroke="#FCD8C1" strokeWidth="10" strokeLinecap="round" fill="none" />
    </g>

    {/* Kancil LEAPING FREELY in the air, ears perked, joyful */}
    <g transform="translate(320, 190) rotate(-18)">
      <ellipse cx="45" cy="40" rx="32" ry="20" fill="#C2410C" />
      <ellipse cx="20" cy="26" rx="14" ry="15" fill="#C2410C" />
      <ellipse cx="14" cy="10" rx="5" ry="11" fill="#9A3412" transform="rotate(-20)" />
      <ellipse cx="26" cy="10" rx="5" ry="11" fill="#9A3412" transform="rotate(20)" />
      <circle cx="17" cy="24" r="4" fill="#1C1917" />
      <circle cx="19" cy="22" r="1.5" fill="#FFF" />
      {/* Happy leap legs stretched out */}
      <line x1="25" y1="52" x2="10" y2="82" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="35" y1="54" x2="25" y2="84" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="62" y1="52" x2="80" y2="78" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="72" y1="50" x2="90" y2="75" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
    </g>

    {/* Sparkles of relief and joy */}
    <g fill="#FDE047">
      <circle cx="340" cy="160" r="4" />
      <circle cx="390" cy="180" r="3.5" />
      <circle cx="440" cy="210" r="4.5" />
    </g>
  </svg>
);

// 5. Hujan rintik gerimis dan pelangi melengkung di atas hutan
export const BudiPage5_RainbowRain: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rainSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7DD3FC" />
        <stop offset="60%" stopColor="#BAE6FD" />
        <stop offset="100%" stopColor="#DCFCE7" />
      </linearGradient>
    </defs>

    <rect width="600" height="450" fill="url(#rainSky)" />

    {/* Big Arching Rainbow */}
    <g transform="translate(300, 420)">
      <ellipse cx="0" cy="0" rx="260" ry="220" fill="none" stroke="#EF4444" strokeWidth="10" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="250" ry="210" fill="none" stroke="#F59E0B" strokeWidth="10" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="240" ry="200" fill="none" stroke="#FACC15" strokeWidth="10" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="230" ry="190" fill="none" stroke="#10B981" strokeWidth="10" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="220" ry="180" fill="none" stroke="#0284C7" strokeWidth="10" opacity="0.8" />
    </g>

    {/* Rain Drops glittering */}
    <g stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
      <line x1="80" y1="80" x2="70" y2="110" />
      <line x1="160" y1="120" x2="150" y2="150" />
      <line x1="240" y1="90" x2="230" y2="120" />
      <line x1="380" y1="140" x2="370" y2="170" />
      <line x1="460" y1="100" x2="450" y2="130" />
      <line x1="530" y1="120" x2="520" y2="150" />
    </g>

    {/* Forest Ground */}
    <path d="M0 340 Q300 310 600 340 L600 450 L0 450 Z" fill="#15803D" />

    {/* Budi holding a big green caladium leaf as an umbrella */}
    <g transform="translate(200, 220)">
      {/* Giant leaf umbrella */}
      <path d="M20 10 C-10 -30 60 -50 90 -20 C110 0 70 40 20 10 Z" fill="#16A34A" stroke="#15803D" strokeWidth="2" />
      <line x1="40" y1="-2" x2="45" y2="70" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />

      {/* Head under leaf */}
      <circle cx="35" cy="30" r="22" fill="#FCD8C1" />
      <circle cx="22" cy="18" r="8" fill="#1E293B" />
      <circle cx="35" cy="12" r="9" fill="#1E293B" />
      <circle cx="48" cy="16" r="8" fill="#1E293B" />
      <circle cx="32" cy="28" r="3.5" fill="#1E293B" />
      <circle cx="44" cy="28" r="3.5" fill="#1E293B" />
      <path d="M33 38 Q38 43 43 38" stroke="#991B1B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M22 60 L52 60 L50 115 L24 115 Z" fill="#B45309" />
    </g>

    {/* Kancil sheltered under the same leaf beside Budi */}
    <g transform="translate(290, 290)">
      <ellipse cx="40" cy="35" rx="28" ry="18" fill="#C2410C" />
      <ellipse cx="18" cy="22" rx="12" ry="14" fill="#C2410C" />
      <circle cx="16" cy="20" r="3.5" fill="#1C1917" />
    </g>
  </svg>
);

// 6. Budi melambaikan tangan pamit pada sahabat barunya dengan hangat
export const BudiPage6_FarewellHug: React.FC<StoryIllustrationProps> = ({ className = '' }) => (
  <svg viewBox="0 0 600 450" className={`w-full h-full object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="farewellSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FB923C" />
        <stop offset="50%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#BBF7D0" />
      </linearGradient>
    </defs>

    <rect width="600" height="450" fill="url(#farewellSky)" />

    {/* Golden Setting Sun in Forest Edge */}
    <circle cx="300" cy="240" r="85" fill="#FEF08A" opacity="0.6" />

    {/* Ground */}
    <path d="M0 330 Q300 290 600 330 L600 450 L0 450 Z" fill="#15803D" />

    {/* Budi turning and waving happily with bright smile */}
    <g transform="translate(180, 200)">
      <circle cx="35" cy="25" r="22" fill="#FCD8C1" />
      <circle cx="22" cy="14" r="8" fill="#1E293B" />
      <circle cx="35" cy="8" r="9" fill="#1E293B" />
      <circle cx="48" cy="12" r="8" fill="#1E293B" />
      <circle cx="28" cy="30" r="4" fill="#F87171" opacity="0.7" />
      <circle cx="46" cy="30" r="4" fill="#F87171" opacity="0.7" />
      <circle cx="32" cy="24" r="3.5" fill="#1E293B" />
      <circle cx="44" cy="24" r="3.5" fill="#1E293B" />
      <path d="M30 34 Q37 42 44 34" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      <path d="M22 55 L52 55 L50 110 L24 110 Z" fill="#B45309" />
      <line x1="28" y1="110" x2="22" y2="160" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" />
      <rect x="15" y="155" width="18" height="12" rx="4" fill="#78350F" />
      <line x1="46" y1="110" x2="54" y2="160" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" />
      <rect x="48" y="155" width="18" height="12" rx="4" fill="#78350F" />

      {/* Right arm waving farewell */}
      <path d="M52 60 Q75 40 85 15" stroke="#FCD8C1" strokeWidth="11" strokeLinecap="round" fill="none" />
      <circle cx="85" cy="15" r="6" fill="#FCD8C1" />
    </g>

    {/* Kancil standing by the bushes, watching Budi with gratitude */}
    <g transform="translate(360, 260)">
      <ellipse cx="45" cy="40" rx="32" ry="22" fill="#C2410C" />
      <ellipse cx="20" cy="26" rx="14" ry="15" fill="#C2410C" />
      <circle cx="17" cy="24" r="4" fill="#1C1917" />
      <circle cx="19" cy="22" r="1.5" fill="#FFF" />
      <line x1="30" y1="58" x2="30" y2="95" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="42" y1="58" x2="42" y2="92" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="65" y1="58" x2="65" y2="95" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="75" y1="58" x2="75" y2="92" stroke="#C2410C" strokeWidth="4.5" strokeLinecap="round" />
    </g>
  </svg>
);
