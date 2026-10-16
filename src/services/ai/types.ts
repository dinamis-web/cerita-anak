/**
 * Arsitektur Layanan AI & Generasi Konten CeritaKita
 * 
 * Modul ini mendefinisikan kontrak antarmuka (interfaces) untuk:
 * 1. StoryTextService - Pembuatan naskah & alur cerita
 * 2. StoryRevisionService - Penyuntingan & revisi teks per halaman
 * 3. IllustrationService - Pengelolaan deskripsi adegan visual & ilustrasi
 * 
 * CATATAN KEAMANAN & ARSITEKTUR:
 * - Tidak ada API key yang ditaruh di sisi klien (frontend).
 * - Saat terhubung ke model AI di masa depan, request dialihkan melalui
 *   endpoint proxy server-side (/api/*) tanpa mengekspos rahasia sistem.
 */

import { Book, Character, StoryGenre, TargetAge, ArtStyle, BookPage, SceneKey } from '../../types';

export type ServiceMode = 'local_prototype' | 'server_api';

export interface StoryGenerationRequest {
  idea: string;
  character: Character;
  genre: StoryGenre;
  targetAge: TargetAge;
  pageCount: 6 | 8 | 12;
  artStyle: ArtStyle;
  authorName?: string;
}

export type RevisionActionType = 
  | 'humor' 
  | 'simplify' 
  | 'ending' 
  | 'rhyme' 
  | 'custom'
  | 'bedtime_calm'
  | 'moral_reinforce';

export interface PageRevisionRequest {
  currentPageText: string;
  pageNumber: number;
  totalPageCount: number;
  character: {
    name: string;
    age: number;
    personality: string;
    favoriteThings: string;
  };
  bookGenre: StoryGenre;
  targetAge: TargetAge;
  actionType: RevisionActionType;
  customPrompt?: string;
}

export interface PageRevisionResult {
  revisedText: string;
  explanation: string;
  suggestedSceneKey?: SceneKey;
  appliedRule: string;
  isAiGenerated: boolean;
}

export interface IllustrationRequest {
  pageText: string;
  pageNumber: number;
  character: Character;
  artStyle: ArtStyle;
  sceneKey: SceneKey;
}

export interface IllustrationResult {
  sceneKey: SceneKey;
  promptDescription: string;
  styleFilter: string;
  isAiGenerated: boolean;
  notes?: string;
}

/**
 * Kontrak Layanan Naskah Cerita
 */
export interface IStoryTextService {
  mode: ServiceMode;
  generateBook(params: StoryGenerationRequest): Promise<Book>;
}

/**
 * Kontrak Layanan Revisi Teks Per Halaman
 */
export interface IStoryRevisionService {
  mode: ServiceMode;
  revisePage(request: PageRevisionRequest): Promise<PageRevisionResult>;
}

/**
 * Kontrak Layanan Visual & Ilustrasi
 */
export interface IIllustrationService {
  mode: ServiceMode;
  generateIllustrationAdvice(request: IllustrationRequest): Promise<IllustrationResult>;
}
