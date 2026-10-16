/**
 * Central Entry Point untuk Layanan Cerita & Konten CeritaKita
 */

import {
  IStoryTextService,
  IStoryRevisionService,
  IIllustrationService,
  ServiceMode,
} from './types';
import {
  LocalStoryTextService,
  LocalStoryRevisionService,
  LocalIllustrationService,
} from './localPrototypeService';
import {
  ServerSideStoryTextService,
  ServerSideStoryRevisionService,
  ServerSideIllustrationService,
} from './serverApiService';

class AiServiceManager {
  private activeMode: ServiceMode = 'local_prototype';

  private localTextService = new LocalStoryTextService();
  private localRevisionService = new LocalStoryRevisionService();
  private localIllustrationService = new LocalIllustrationService();

  private serverTextService = new ServerSideStoryTextService();
  private serverRevisionService = new ServerSideStoryRevisionService();
  private serverIllustrationService = new ServerSideIllustrationService();

  public getMode(): ServiceMode {
    return this.activeMode;
  }

  public setMode(mode: ServiceMode) {
    this.activeMode = mode;
  }

  public isRealAiConnected(): boolean {
    return this.activeMode === 'server_api';
  }

  public getTextService(): IStoryTextService {
    return this.activeMode === 'server_api' ? this.serverTextService : this.localTextService;
  }

  public getRevisionService(): IStoryRevisionService {
    return this.activeMode === 'server_api'
      ? this.serverRevisionService
      : this.localRevisionService;
  }

  public getIllustrationService(): IIllustrationService {
    return this.activeMode === 'server_api'
      ? this.serverIllustrationService
      : this.localIllustrationService;
  }
}

export const aiManager = new AiServiceManager();
export * from './types';
