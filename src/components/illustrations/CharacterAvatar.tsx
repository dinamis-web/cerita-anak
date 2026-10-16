import React from 'react';
import { Character, SkinTone, HairOrHeadwear, ClothingStyle } from '../../types';

interface CharacterAvatarProps {
  character?: Partial<Character>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
}

const skinToneColors: Record<SkinTone, { skin: string; blush: string; shadow: string }> = {
  fair: { skin: '#FCD8C1', blush: '#F8A8A8', shadow: '#E9BA9F' },
  warm: { skin: '#EAB68B', blush: '#E59188', shadow: '#D09A6E' },
  tan: { skin: '#C88E65', blush: '#BF6E5F', shadow: '#A76F47' },
  deep: { skin: '#8E5936', blush: '#794026', shadow: '#703F22' },
};

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  character = {},
  size = 'md',
  className = '',
}) => {
  const skinTone: SkinTone = character.skinTone || 'warm';
  const hair: HairOrHeadwear = character.hairOrHeadwear || 'short_neat';
  const clothing: ClothingStyle = character.clothing || 'batik_ceria';
  const hasGlasses = !!character.glasses;
  const colors = skinToneColors[skinTone] || skinToneColors.warm;

  const sizePixels = {
    sm: 56,
    md: 88,
    lg: 140,
    xl: 200,
  }[size];

  // Render Headwear or Hair
  const renderHairOrHeadwear = () => {
    switch (hair) {
      case 'peci_traditional':
        return (
          <g id="peci">
            {/* Peci Velvet Hat */}
            <path
              d="M32 38 Q50 34 68 38 L67 22 Q50 20 33 22 Z"
              fill="#18232C"
            />
            {/* Gold trim */}
            <path
              d="M32.5 37 Q50 33.5 67.5 37"
              stroke="#D4AF37"
              strokeWidth="1.5"
              fill="none"
            />
          </g>
        );

      case 'hijab_pastel':
        return (
          <g id="hijab">
            {/* Outer draped veil */}
            <path
              d="M26 38 C22 55 24 72 32 82 C38 88 62 88 68 82 C76 72 78 55 74 38 C70 20 30 20 26 38 Z"
              fill="#F4B7A7"
            />
            {/* Inner cap frame around face */}
            <path
              d="M34 40 C34 32 66 32 66 40 C66 52 64 64 50 67 C36 64 34 52 34 40 Z"
              fill="#E59987"
            />
            {/* Subtle folds */}
            <path
              d="M30 65 Q40 76 50 78 Q60 76 70 65"
              stroke="#D88775"
              strokeWidth="1.2"
              fill="none"
            />
          </g>
        );

      case 'short_curly':
        return (
          <g id="hair-curly" fill="#2B1E16">
            <circle cx="33" cy="33" r="8" />
            <circle cx="43" cy="27" r="9" />
            <circle cx="55" cy="27" r="9" />
            <circle cx="67" cy="33" r="8" />
            <circle cx="28" cy="42" r="7" />
            <circle cx="72" cy="42" r="7" />
            <path d="M30 38 Q50 26 70 38 Q50 30 30 38 Z" />
          </g>
        );

      case 'ponytail':
        return (
          <g id="hair-ponytail">
            {/* High ponytail at right side */}
            <path
              d="M62 30 C75 24 82 35 78 48 C75 42 70 38 65 37 Z"
              fill="#261A14"
            />
            {/* Ribbon */}
            <circle cx="64" cy="34" r="3.5" fill="#E05B5B" />
            {/* Main hair */}
            <path
              d="M30 42 C30 25 70 25 70 42 C70 32 60 28 50 28 C38 28 30 34 30 42 Z"
              fill="#261A14"
            />
            {/* Side bangs */}
            <path
              d="M32 40 Q40 45 42 34"
              stroke="#261A14"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        );

      case 'twin_pigtails':
        return (
          <g id="hair-twins">
            {/* Left pigtail */}
            <ellipse cx="23" cy="48" rx="6" ry="11" fill="#382115" transform="rotate(-15 23 48)" />
            <circle cx="27" cy="42" r="3" fill="#0D5C58" />
            {/* Right pigtail */}
            <ellipse cx="77" cy="48" rx="6" ry="11" fill="#382115" transform="rotate(15 77 48)" />
            <circle cx="73" cy="42" r="3" fill="#0D5C58" />
            {/* Head hair base */}
            <path
              d="M29 42 C29 25 71 25 71 42 C68 33 58 30 50 30 C40 30 32 34 29 42 Z"
              fill="#382115"
            />
            {/* Straight cute fringe */}
            <path
              d="M32 38 Q50 42 68 38 Q50 35 32 38 Z"
              fill="#382115"
            />
          </g>
        );

      case 'wavy_shoulder':
        return (
          <g id="hair-wavy" fill="#3B261A">
            <path
              d="M26 44 C24 58 26 68 32 72 C30 64 30 54 32 44 Z"
            />
            <path
              d="M74 44 C76 58 74 68 68 72 C70 64 70 54 68 44 Z"
            />
            <path
              d="M28 40 C28 24 72 24 72 40 C68 30 58 28 50 28 C40 28 32 32 28 40 Z"
            />
          </g>
        );

      case 'headband_ribbon':
        return (
          <g id="hair-headband">
            {/* Neat hair */}
            <path
              d="M29 42 C29 26 71 26 71 42 C65 32 58 30 50 30 C38 30 33 34 29 42 Z"
              fill="#2A1B13"
            />
            {/* Headband ribbon in gold */}
            <path
              d="M30 38 Q50 33 70 38"
              stroke="#D4AF37"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Little bow on left */}
            <circle cx="34" cy="34" r="3" fill="#E05B5B" />
          </g>
        );

      case 'short_neat':
      default:
        return (
          <g id="hair-neat">
            <path
              d="M30 42 C28 28 40 23 50 23 C62 23 72 28 70 42 C66 32 58 31 50 32 C40 31 34 35 30 42 Z"
              fill="#221814"
            />
            {/* Little sideburns */}
            <path d="M29 40 L29 48 L33 46 Z" fill="#221814" />
            <path d="M71 40 L71 48 L67 46 Z" fill="#221814" />
          </g>
        );
    }
  };

  // Render Clothing
  const renderClothing = () => {
    switch (clothing) {
      case 'batik_ceria':
        return (
          <g id="clothes-batik">
            {/* Shirt base */}
            <path
              d="M30 78 Q50 72 70 78 L78 100 L22 100 Z"
              fill="#0D5C58"
            />
            {/* Collar */}
            <path
              d="M44 75 L50 84 L56 75 Z"
              fill="#E8DFD0"
            />
            {/* Batik motifs (golden dots & curves) */}
            <circle cx="36" cy="86" r="1.5" fill="#D4AF37" />
            <circle cx="44" cy="92" r="1.5" fill="#D4AF37" />
            <circle cx="56" cy="92" r="1.5" fill="#D4AF37" />
            <circle cx="64" cy="86" r="1.5" fill="#D4AF37" />
            <path
              d="M36 94 Q40 91 44 94 M56 94 Q60 91 64 94"
              stroke="#D4AF37"
              strokeWidth="1.2"
              fill="none"
            />
          </g>
        );

      case 'explorer_vest':
        return (
          <g id="clothes-explorer">
            <path
              d="M30 78 Q50 72 70 78 L78 100 L22 100 Z"
              fill="#8A9A65"
            />
            {/* Inner orange/tan t-shirt */}
            <path d="M43 75 L50 86 L57 75 Z" fill="#E88B52" />
            {/* Vest pockets */}
            <rect x="31" y="85" width="8" height="7" rx="1.5" fill="#6E7D4E" />
            <rect x="61" y="85" width="8" height="7" rx="1.5" fill="#6E7D4E" />
          </g>
        );

      case 'flower_dress':
        return (
          <g id="clothes-dress">
            <path
              d="M32 78 Q50 74 68 78 L79 100 L21 100 Z"
              fill="#E78484"
            />
            {/* White scalloped collar */}
            <path
              d="M42 75 Q50 82 58 75"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Little flowers */}
            <circle cx="36" cy="88" r="1.8" fill="#FFF5EB" />
            <circle cx="36" cy="88" r="0.7" fill="#E8B993" />
            <circle cx="64" cy="88" r="1.8" fill="#FFF5EB" />
            <circle cx="64" cy="88" r="0.7" fill="#E8B993" />
            <circle cx="50" cy="94" r="1.8" fill="#FFF5EB" />
            <circle cx="50" cy="94" r="0.7" fill="#E8B993" />
          </g>
        );

      case 'pajama_stars':
        return (
          <g id="clothes-pajamas">
            <path
              d="M30 78 Q50 72 70 78 L78 100 L22 100 Z"
              fill="#375573"
            />
            {/* Little yellow stars */}
            <path d="M38 86 L39 88 L41 88 L39.5 89 L40 91 L38 90 L36 91 L36.5 89 L35 88 L37 88 Z" fill="#F4D35E" />
            <path d="M60 88 L61 90 L63 90 L61.5 91 L62 93 L60 92 L58 93 L58.5 91 L57 90 L59 90 Z" fill="#F4D35E" />
            <circle cx="49" cy="83" r="1" fill="#FFFFFF" opacity="0.8" />
          </g>
        );

      case 'sailor_stripes':
        return (
          <g id="clothes-sailor">
            <path
              d="M30 78 Q50 72 70 78 L78 100 L22 100 Z"
              fill="#FAF7F2"
            />
            {/* Navy stripes */}
            <path d="M26 84 Q50 80 74 84" stroke="#1D3E56" strokeWidth="2" fill="none" />
            <path d="M24 90 Q50 86 76 90" stroke="#1D3E56" strokeWidth="2" fill="none" />
            <path d="M22 96 Q50 92 78 96" stroke="#1D3E56" strokeWidth="2" fill="none" />
            {/* Red neckerchief */}
            <path d="M46 76 L50 83 L54 76 Z" fill="#D74E4E" />
          </g>
        );

      case 'casual_cloud':
      default:
        return (
          <g id="clothes-casual">
            <path
              d="M30 78 Q50 72 70 78 L78 100 L22 100 Z"
              fill="#5B9BB9"
            />
            {/* Cloud shape on chest */}
            <path
              d="M45 88 Q43 85 46 84 Q48 82 51 83 Q54 81 56 83 Q58 84 57 87 Q59 89 56 90 L46 90 Q43 89 45 88 Z"
              fill="#FFFFFF"
              opacity="0.9"
            />
          </g>
        );
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-amber-50/70 shadow-sm border-2 border-[#EADFC9] ${className}`}
      style={{ width: sizePixels, height: sizePixels }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle gradient background */}
          <radialGradient id="avatarGlow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="100%" stopColor="#F5E8D0" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill="url(#avatarGlow)" />

        {/* Neck */}
        <path
          d="M44 64 L44 76 Q50 79 56 76 L56 64 Z"
          fill={colors.shadow}
        />

        {/* Head Base */}
        {hair !== 'hijab_pastel' && (
          <g id="ears">
            <circle cx="31" cy="52" r="4.5" fill={colors.skin} />
            <circle cx="69" cy="52" r="4.5" fill={colors.skin} />
          </g>
        )}

        {/* Face */}
        <ellipse cx="50" cy="50" rx="20" ry="21" fill={colors.skin} />

        {/* Rosy Cheeks */}
        <circle cx="38" cy="55" r="4" fill={colors.blush} opacity="0.65" />
        <circle cx="62" cy="55" r="4" fill={colors.blush} opacity="0.65" />

        {/* Eyes (warm & sparkling) */}
        <ellipse cx="42" cy="48" rx="2.5" ry="3.2" fill="#221814" />
        <ellipse cx="58" cy="48" rx="2.5" ry="3.2" fill="#221814" />
        {/* Eye catchlight sparkles */}
        <circle cx="43" cy="47" r="1" fill="#FFFFFF" />
        <circle cx="59" cy="47" r="1" fill="#FFFFFF" />

        {/* Eyebrows */}
        <path
          d="M38 43 Q42 41 45 43"
          stroke="#382115"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M55 43 Q58 41 62 43"
          stroke="#382115"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Cute button nose */}
        <path
          d="M49 51 Q50 53 51 51"
          stroke={colors.shadow}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Happy Smile */}
        <path
          d="M44 57 Q50 63 56 57"
          stroke="#A84432"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Optional Glasses */}
        {hasGlasses && (
          <g id="glasses">
            <circle
              cx="42"
              cy="48"
              r="6.5"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <circle
              cx="58"
              cy="48"
              r="6.5"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <path
              d="M48.5 48 L51.5 48"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Hair / Headwear */}
        {renderHairOrHeadwear()}

        {/* Clothing Body */}
        {renderClothing()}
      </svg>
    </div>
  );
};
