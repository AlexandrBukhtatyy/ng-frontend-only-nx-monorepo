import {FeaturesStorageService} from "./features-storage-service.interface";

export interface FeatureToggleConfig {
  /**
   * URL куда будет редиректить guard если парамет redirectTo не указан(по умолчанию)
   */
  guardFailureUri: string;
  /**
   * Сервис который будет ответственен за хранение ключей и проверку доступности ключа
   */
  featuresStorageService: new (...args: any[]) => FeaturesStorageService;
}
