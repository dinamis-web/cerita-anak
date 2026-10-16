import React from 'react';
import { SceneKey, ArtStyle } from '../../types';
import {
  RaniCoverIllustration,
  RaniPage1_Prep,
  RaniPage2_FindKite,
  RaniPage3_WalkField,
  RaniPage4_TryFly,
  RaniPage5_KiteStuck,
  RaniPage6_FriendHelps,
  RaniPage7_FlyingHigh,
  RaniPage8_SunsetHappy,
} from './storyBooks/RaniKiteStoryIllustrations';
import {
  AlifCoverIllustration,
  AlifPage1_LampsOff,
  AlifPage2_WindowPajamas,
  AlifPage3_FatherWarmMilk,
  AlifPage4_TelescopeDream,
  AlifPage5_BedtimePrayer,
  AlifPage6_DreamBoat,
} from './storyBooks/AlifStarsStoryIllustrations';
import {
  BudiCoverIllustration,
  BudiPage1_MorningPath,
  BudiPage2_RustlingFerns,
  BudiPage3_FoundKancil,
  BudiPage4_GentleRescue,
  BudiPage5_RainbowRain,
  BudiPage6_FarewellHug,
} from './storyBooks/BudiForestStoryIllustrations';

export interface SceneIllustrationProps {
  sceneKey: SceneKey;
  artStyle?: ArtStyle;
  className?: string;
  characterName?: string;
  title?: string;
  bookId?: string;
  pageNumber?: number;
  isCover?: boolean;
}

export const SceneIllustration: React.FC<SceneIllustrationProps> = ({
  sceneKey,
  artStyle = 'watercolor',
  className = '',
  title = '',
  bookId,
  pageNumber,
  isCover = false,
  characterName,
}) => {
  // Art style filter enhancements
  const styleGradients = {
    watercolor: 'sepia-[0.06] saturate-[0.98] contrast-[0.98]',
    cartoon: 'contrast-[1.05] saturate-[1.12]',
    classic: 'sepia-[0.14] brightness-[0.98]',
    warm3d: 'contrast-[1.03] saturate-[1.05] drop-shadow-sm',
  }[artStyle];

  // 1. Check for Book-specific dedicated illustrations (Rani, Alif, Budi)
  if (bookId === 'book-rani-layang-layang') {
    if (isCover) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniCoverIllustration title={title} /></div>;
    if (pageNumber === 1) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniPage1_Prep title={title} /></div>;
    if (pageNumber === 2) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniPage2_FindKite title={title} /></div>;
    if (pageNumber === 3) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniPage3_WalkField title={title} /></div>;
    if (pageNumber === 4) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniPage4_TryFly title={title} /></div>;
    if (pageNumber === 5) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniPage5_KiteStuck title={title} /></div>;
    if (pageNumber === 6) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniPage6_FriendHelps title={title} /></div>;
    if (pageNumber === 7) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniPage7_FlyingHigh title={title} /></div>;
    if (pageNumber === 8) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><RaniPage8_SunsetHappy title={title} /></div>;
  }

  if (bookId === 'book-alif-bintang-malam') {
    if (isCover) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><AlifCoverIllustration title={title} /></div>;
    if (pageNumber === 1) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><AlifPage1_LampsOff title={title} /></div>;
    if (pageNumber === 2) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><AlifPage2_WindowPajamas title={title} /></div>;
    if (pageNumber === 3) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><AlifPage3_FatherWarmMilk title={title} /></div>;
    if (pageNumber === 4) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><AlifPage4_TelescopeDream title={title} /></div>;
    if (pageNumber === 5) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><AlifPage5_BedtimePrayer title={title} /></div>;
    if (pageNumber === 6) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><AlifPage6_DreamBoat title={title} /></div>;
  }

  if (bookId === 'book-kiko-rimba') {
    if (isCover) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><BudiCoverIllustration title={title} /></div>;
    if (pageNumber === 1) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><BudiPage1_MorningPath title={title} /></div>;
    if (pageNumber === 2) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><BudiPage2_RustlingFerns title={title} /></div>;
    if (pageNumber === 3) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><BudiPage3_FoundKancil title={title} /></div>;
    if (pageNumber === 4) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><BudiPage4_GentleRescue title={title} /></div>;
    if (pageNumber === 5) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><BudiPage5_RainbowRain title={title} /></div>;
    if (pageNumber === 6) return <div className={`relative w-full h-full overflow-hidden ${styleGradients} ${className}`}><BudiPage6_FarewellHug title={title} /></div>;
  }

  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${styleGradients} ${className}`}>
      {renderSceneSvg(sceneKey, title, characterName)}
    </div>
  );
};

function renderSceneSvg(sceneKey: SceneKey, title: string, characterName?: string) {
  switch (sceneKey) {
    case 'kite_flying_hill':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hillSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#89C4E1" />
              <stop offset="50%" stopColor="#C4E7F4" />
              <stop offset="100%" stopColor="#F5EFE0" />
            </linearGradient>
            <linearGradient id="hillGrass1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A8CE63" />
              <stop offset="100%" stopColor="#7EAA3B" />
            </linearGradient>
            <linearGradient id="kiteRainbow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F45B69" />
              <stop offset="33%" stopColor="#FBB13C" />
              <stop offset="66%" stopColor="#40BA93" />
              <stop offset="100%" stopColor="#3185FC" />
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#hillSky)" />
          <circle cx="480" cy="90" r="45" fill="#FFE27A" opacity="0.4" />
          <circle cx="480" cy="90" r="32" fill="#FCD34D" />
          <g fill="#FFFFFF" opacity="0.85">
            <ellipse cx="140" cy="110" rx="45" ry="24" />
            <circle cx="120" cy="100" r="28" />
            <circle cx="165" cy="105" r="22" />
          </g>
          <path d="M-20 320 Q120 200 240 280 T520 230 L620 340 L620 450 L-20 450 Z" fill="#99B898" opacity="0.6" />
          <path d="M-10 330 Q160 260 360 340 T620 310 L620 450 L-10 450 Z" fill="url(#hillGrass1)" />
          <g transform="translate(320, 90) rotate(18)">
            <polygon points="50,0 85,60 50,110 15,60" fill="url(#kiteRainbow)" />
            <line x1="50" y1="0" x2="50" y2="110" stroke="#FFEAA7" strokeWidth="2.5" />
            <path d="M15 60 Q50 48 85 60" stroke="#FFEAA7" strokeWidth="2.5" fill="none" />
            <path d="M50 110 Q65 140 45 170 T60 220" stroke="#E056FD" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
          <path d="M352 140 Q280 230 200 375" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3,2" fill="none" opacity="0.8" />
          {/* Running Child */}
          <g transform="translate(180, 340)">
            <circle cx="20" cy="12" r="10" fill="#FCD8C1" />
            <path d="M14 22 L26 22 L24 48 L16 48 Z" fill="#0D5C58" />
            <line x1="24" y1="24" x2="35" y2="10" stroke="#FCD8C1" strokeWidth="4" strokeLinecap="round" />
            <line x1="16" y1="48" x2="10" y2="65" stroke="#FCD8C1" strokeWidth="4" strokeLinecap="round" />
            <line x1="24" y1="48" x2="32" y2="62" stroke="#FCD8C1" strokeWidth="4" strokeLinecap="round" />
          </g>
          <circle cx="80" cy="410" r="5" fill="#FF7675" />
          <circle cx="120" cy="425" r="6" fill="#FDCB6E" />
          <circle cx="460" cy="405" r="6" fill="#FD79A8" />
        </svg>
      );

    case 'morning_garden':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="morningSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F9D49C" />
              <stop offset="40%" stopColor="#FFF2D6" />
              <stop offset="100%" stopColor="#D5EDD8" />
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#morningSky)" />
          <circle cx="130" cy="110" r="50" fill="#FFC966" opacity="0.35" />
          <circle cx="130" cy="110" r="35" fill="#FBBF24" />
          <g transform="translate(340, 150)">
            <polygon points="120,40 220,95 20,95" fill="#A84C32" />
            <rect x="35" y="95" width="160" height="90" fill="#EADBC8" />
            <rect x="55" y="115" width="35" height="40" rx="3" fill="#6998AB" stroke="#534338" strokeWidth="3" />
            <rect x="135" y="115" width="30" height="70" fill="#885A3C" rx="2" />
          </g>
          <path d="M0 310 Q280 270 600 310 L600 450 L0 450 Z" fill="#5F8D3E" />
          <ellipse cx="280" cy="370" rx="35" ry="14" fill="#D3C5B4" stroke="#B0A08D" strokeWidth="2" />
          <g transform="translate(180, 310)">
            <circle cx="20" cy="40" r="8" fill="#F472B6" />
            <circle cx="45" cy="50" r="10" fill="#FB923C" />
            <circle cx="70" cy="35" r="7" fill="#A78BFA" />
          </g>
          <g transform="translate(250, 200) rotate(-15)">
            <ellipse cx="10" cy="10" rx="8" ry="12" fill="#FBBF24" />
            <ellipse cx="22" cy="10" rx="8" ry="12" fill="#FBBF24" />
          </g>
        </svg>
      );

    case 'starlit_night':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="50%" stopColor="#1C2541" />
              <stop offset="100%" stopColor="#2D3E5D" />
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#nightSky)" />
          <g fill="#FFF">
            <circle cx="80" cy="60" r="2" />
            <circle cx="120" cy="95" r="1.5" />
            <circle cx="190" cy="45" r="2.5" />
            <circle cx="250" cy="120" r="1.8" />
            <circle cx="310" cy="70" r="2" />
            <circle cx="490" cy="65" r="2.5" />
          </g>
          <g transform="translate(420, 50)">
            <circle cx="50" cy="50" r="60" fill="#FDE68A" opacity="0.3" />
            <path d="M60 20 C82 35 88 68 70 90 C50 110 18 105 10 95 C35 98 62 82 60 48 C59 36 54 26 50 20 Z" fill="#FDE68A" />
          </g>
          <g transform="translate(80, 210)">
            <rect x="0" y="30" width="440" height="210" fill="#201C1B" rx="8" />
            <rect x="15" y="45" width="410" height="180" fill="#FEF3C7" opacity="0.9" rx="4" />
            <rect x="25" y="55" width="185" height="160" fill="#0E1A2C" rx="4" />
            <rect x="230" y="55" width="185" height="160" fill="#0E1A2C" rx="4" />
            <circle cx="120" cy="140" r="20" fill="#F0C294" />
            <path d="M90 215 C90 175 150 175 150 215 Z" fill="#1E3A8A" />
          </g>
        </svg>
      );

    case 'friendly_forest':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#E2F1E4" />
          <polygon points="120,0 220,450 160,450 80,0" fill="#FFFDE8" opacity="0.3" />
          <circle cx="70" cy="60" r="110" fill="#477335" />
          <circle cx="240" cy="40" r="120" fill="#5F8C43" />
          <circle cx="420" cy="30" r="130" fill="#477335" />
          <path d="M0 360 Q220 300 400 350 T600 330 L600 450 L0 450 Z" fill="#3D5A2B" />
          {/* Gentle Kancil */}
          <g transform="translate(240, 290)">
            <ellipse cx="60" cy="50" rx="36" ry="22" fill="#BA6534" />
            <circle cx="55" cy="55" r="4" fill="#F8E5D6" />
            <circle cx="70" cy="54" r="3.5" fill="#F8E5D6" />
            <ellipse cx="28" cy="34" rx="14" ry="18" fill="#BA6534" />
            <circle cx="24" cy="32" r="3.5" fill="#1A1A1A" />
            <line x1="42" y1="65" x2="40" y2="105" stroke="#BA6534" strokeWidth="4" strokeLinecap="round" />
            <line x1="52" y1="65" x2="52" y2="102" stroke="#BA6534" strokeWidth="4" strokeLinecap="round" />
            <line x1="75" y1="65" x2="74" y2="105" stroke="#BA6534" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'rainbow_rain':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rainbowSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A8D5E5" />
              <stop offset="60%" stopColor="#D9EEF7" />
              <stop offset="100%" stopColor="#F5ECE1" />
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#rainbowSky)" />
          <g transform="translate(300, 420)">
            <ellipse cx="0" cy="0" rx="280" ry="240" fill="none" stroke="#FF5E7E" strokeWidth="12" opacity="0.85" />
            <ellipse cx="0" cy="0" rx="268" ry="228" fill="none" stroke="#FFA938" strokeWidth="12" opacity="0.85" />
            <ellipse cx="0" cy="0" rx="256" ry="216" fill="none" stroke="#FFEC40" strokeWidth="12" opacity="0.85" />
            <ellipse cx="0" cy="0" rx="244" ry="204" fill="none" stroke="#26DE81" strokeWidth="12" opacity="0.85" />
            <ellipse cx="0" cy="0" rx="232" ry="192" fill="none" stroke="#2D98DA" strokeWidth="12" opacity="0.85" />
          </g>
          <path d="M0 340 Q300 310 600 340 L600 450 L0 450 Z" fill="#699852" />
          <ellipse cx="260" cy="390" rx="80" ry="22" fill="#B4DCF0" stroke="#8DC8E4" strokeWidth="3" />
        </svg>
      );

    case 'grandmother_porch':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#FDF3E1" />
          <path d="M0 80 L600 80 L520 120 L80 120 Z" fill="#6E4428" />
          <rect x="70" y="80" width="22" height="320" fill="#885A3C" />
          <rect x="508" y="80" width="22" height="320" fill="#885A3C" />
          <polygon points="0,320 600,320 600,450 0,450" fill="#C99E74" />
          <g transform="translate(240, 270)">
            <ellipse cx="60" cy="40" rx="70" ry="25" fill="#805637" />
            <ellipse cx="60" cy="38" rx="68" ry="23" fill="#AB7A51" />
            <path d="M48 24 C44 14 62 14 68 24 Z" fill="#0D5C58" />
            <rect x="46" y="24" width="24" height="14" rx="4" fill="#0D5C58" />
            <rect x="80" y="28" width="12" height="10" rx="2" fill="#FFF5EA" />
          </g>
        </svg>
      );

    case 'bedtime_cozy':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#1E293B" />
          <circle cx="120" cy="180" r="140" fill="#FDE68A" opacity="0.25" />
          <circle cx="120" cy="180" r="50" fill="#FBBF24" opacity="0.45" />
          <rect x="180" y="200" width="380" height="180" rx="12" fill="#583C28" />
          <path d="M190 280 L550 280 L550 380 L190 380 Z" fill="#3B82F6" />
          <ellipse cx="260" cy="260" rx="45" ry="24" fill="#FAF5EB" />
          <ellipse cx="360" cy="260" rx="45" ry="24" fill="#FAF5EB" />
        </svg>
      );

    case 'sea_adventure':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="seaSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#FEF08A" />
            </linearGradient>
            <linearGradient id="oceanWave" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#0C4A6E" />
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#seaSky)" />
          {/* Gentle Sea Horizon */}
          <path d="M0 260 Q150 250 300 260 T600 255 L600 450 L0 450 Z" fill="url(#oceanWave)" />
          {/* Wave crests */}
          <path d="M0 320 Q80 305 160 320 T320 315 T480 320 T600 315" stroke="#BAE6FD" strokeWidth="4" fill="none" opacity="0.6" />
          <path d="M0 370 Q100 355 200 370 T400 365 T600 370" stroke="#BAE6FD" strokeWidth="5" fill="none" opacity="0.5" />
          {/* Magnificent Indonesian Pinisi Sailing Boat */}
          <g transform="translate(240, 150)">
            <polygon points="10,80 180,80 150,120 40,120" fill="#78350F" stroke="#451A03" strokeWidth="2" />
            <line x1="75" y1="15" x2="75" y2="80" stroke="#451A03" strokeWidth="4" />
            <line x1="125" y1="25" x2="125" y2="80" stroke="#451A03" strokeWidth="4" />
            {/* White Sails */}
            <polygon points="75,20 75,75 25,75" fill="#FFFDF9" stroke="#E2E8F0" strokeWidth="2" />
            <polygon points="125,30 125,75 80,75" fill="#FFFDF9" stroke="#E2E8F0" strokeWidth="2" />
          </g>
          {/* Friendly Leaping Dolphin */}
          <g transform="translate(110, 270) rotate(-20)">
            <path d="M0 30 Q25 0 60 10 Q70 15 80 8 Q65 25 45 32 Q20 35 0 30 Z" fill="#67E8F9" stroke="#0284C7" strokeWidth="1.5" />
            <polygon points="35,15 45,5 42,18" fill="#0284C7" />
          </g>
        </svg>
      );

    case 'kitchen_baking':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#FEF3C7" />
          {/* Kitchen Tile Backsplash */}
          <rect x="0" y="100" width="600" height="150" fill="#FFFDF9" stroke="#E2D4BC" strokeWidth="2" />
          <line x1="0" y1="150" x2="600" y2="150" stroke="#E2D4BC" strokeWidth="1.5" />
          <line x1="0" y1="200" x2="600" y2="200" stroke="#E2D4BC" strokeWidth="1.5" />
          {/* Kitchen Wooden Counter */}
          <rect x="0" y="250" width="600" height="200" fill="#92400E" />
          <rect x="0" y="240" width="600" height="20" fill="#B45309" />
          {/* Steaming Bamboo Steamer (Kukusan) */}
          <g transform="translate(180, 160)">
            <ellipse cx="40" cy="50" rx="35" ry="12" fill="#D97706" stroke="#92400E" strokeWidth="2" />
            <rect x="5" y="25" width="70" height="25" fill="#D97706" stroke="#92400E" strokeWidth="2" />
            <ellipse cx="40" cy="25" rx="35" ry="12" fill="#FBBF24" stroke="#92400E" strokeWidth="2" />
            <path d="M35 15 Q40 0 32 -15" stroke="#E2E8F0" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M45 15 Q50 0 42 -15" stroke="#E2E8F0" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
          {/* Plate of Green Pandan Klepon with grated coconut */}
          <g transform="translate(340, 210)">
            <ellipse cx="50" cy="40" rx="55" ry="20" fill="#FFFDF9" stroke="#CBD5E1" strokeWidth="2" />
            <circle cx="35" cy="35" r="9" fill="#22C55E" />
            <circle cx="50" cy="32" r="9" fill="#22C55E" />
            <circle cx="65" cy="35" r="9" fill="#22C55E" />
            <circle cx="42" cy="42" r="9" fill="#22C55E" />
            <circle cx="58" cy="42" r="9" fill="#22C55E" />
          </g>
        </svg>
      );

    case 'celebration_hug':
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="celebSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#FCE7F3" />
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#celebSky)" />
          {/* Festive Garland Flags */}
          <path d="M30 60 Q300 130 570 60" stroke="#DFBE72" strokeWidth="2" fill="none" />
          <polygon points="100,75 120,78 110,105" fill="#EF4444" />
          <polygon points="180,90 200,92 190,120" fill="#F59E0B" />
          <polygon points="260,98 280,98 270,128" fill="#10B981" />
          <polygon points="340,98 360,96 350,126" fill="#3B82F6" />
          <polygon points="420,90 440,86 430,116" fill="#EC4899" />
          {/* Confetti & Stars */}
          <g fill="#F59E0B">
            <circle cx="140" cy="160" r="4" fill="#EF4444" />
            <circle cx="210" cy="180" r="3.5" fill="#3B82F6" />
            <circle cx="390" cy="170" r="4" fill="#10B981" />
            <circle cx="470" cy="150" r="3.5" fill="#F59E0B" />
          </g>
          {/* Warm Grassy Hilltop */}
          <path d="M0 310 Q300 270 600 310 L600 450 L0 450 Z" fill="#22C55E" />
          {/* Friends hugging / cheering */}
          <g transform="translate(240, 220)">
            <circle cx="40" cy="25" r="22" fill="#FCD8C1" />
            <circle cx="75" cy="25" r="22" fill="#F0C294" />
            <path d="M25 55 C25 45 90 45 90 55 L85 130 L30 130 Z" fill="#0D5C58" />
            <path d="M35 34 Q40 38 45 34" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M70 34 Q75 38 80 34" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case 'village_path':
    default:
      return (
        <svg viewBox="0 0 600 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="villageSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#78BCE2" />
              <stop offset="60%" stopColor="#D5ECF8" />
              <stop offset="100%" stopColor="#FFF7E6" />
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#villageSky)" />
          {/* Indonesian Volcano Peak in Distance */}
          <path d="M120 320 L270 140 L420 320 Z" fill="#8FAEC7" opacity="0.65" />
          <path d="M220 320 L370 170 L520 320 Z" fill="#7A9EB9" opacity="0.75" />
          <path d="M0 320 Q300 280 600 320 L600 450 L0 450 Z" fill="#6EA84B" />
          <path d="M220 450 L270 320 L330 320 L380 450 Z" fill="#D3B895" />
          <g transform="translate(480, 160)">
            <path d="M40 200 Q20 90 60 10" stroke="#78593F" strokeWidth="10" fill="none" strokeLinecap="round" />
            <circle cx="60" cy="10" r="30" fill="#4C8032" />
            <circle cx="45" cy="5" r="25" fill="#5F9C3E" />
          </g>
        </svg>
      );
  }
}
