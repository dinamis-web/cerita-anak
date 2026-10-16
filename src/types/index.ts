export type Gender = 'boy' | 'girl' | 'neutral';

export type SkinTone = 'fair' | 'warm' | 'tan' | 'deep';

export type HairOrHeadwear = 
  | 'short_neat'
  | 'short_curly'
  | 'ponytail'
  | 'twin_pigtails'
  | 'hijab_pastel'
  | 'peci_traditional'
  | 'wavy_shoulder'
  | 'headband_ribbon';

export type ClothingStyle =
  | 'casual_cloud'
  | 'batik_ceria'
  | 'explorer_vest'
  | 'flower_dress'
  | 'pajama_stars'
  | 'sailor_stripes';

export type StoryGenre = 
  | 'adventure' 
  | 'friendship' 
  | 'bedtime' 
  | 'educational' 
  | 'moral_values' 
  | 'fantasy';

export type TargetAge = '3-4' | '5-7' | '8-10';

export type ArtStyle = 'watercolor' | 'cartoon' | 'classic' | 'warm3d';

export interface Character {
  id: string;
  name: string;
  gender: Gender;
  age: number;
  skinTone: SkinTone;
  hairOrHeadwear: HairOrHeadwear;
  clothing: ClothingStyle;
  personality: string;
  favoriteThings: string;
  role: string;
  bio?: string;
  glasses?: boolean;
  createdAt: string;
}

export type SceneKey = 
  | 'morning_garden'
  | 'village_path'
  | 'kite_flying_hill'
  | 'grandmother_porch'
  | 'starlit_night'
  | 'friendly_forest'
  | 'sea_adventure'
  | 'rainbow_rain'
  | 'kitchen_baking'
  | 'bedtime_cozy'
  | 'celebration_hug';

export interface BookPage {
  id: string;
  pageNumber: number;
  text: string;
  sceneKey: SceneKey;
  imagePromptHint?: string;
  notes?: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  synopsis: string;
  moralValue: string;
  genre: StoryGenre;
  targetAge: TargetAge;
  artStyle: ArtStyle;
  characterId: string;
  characterName: string;
  authorName: string;
  coverSceneKey: SceneKey;
  pages: BookPage[];
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ActiveView = 
  | 'home'
  | 'character-studio'
  | 'wizard'
  | 'editor'
  | 'reader';
