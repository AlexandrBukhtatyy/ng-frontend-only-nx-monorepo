import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureToggleConfig} from "./interfaces/feature-toggle-config.interface";
import {FeatureToggleService} from "./services/feature-toggle.service";
import {FEATURE_TOGGLE_CONFIG_TOKEN} from "./tokens/feature-toggle-config.token";
import {FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN} from "./tokens/feature-toggle-storage-service.token";

@NgModule({
  imports: [CommonModule],
})
export class FeatureToggleModule {
  static forRoot(
    config: FeatureToggleConfig
  ): ModuleWithProviders<FeatureToggleModule> {
    return {
      ngModule: FeatureToggleModule,
      providers: [
        FeatureToggleService,
        {
          provide: FEATURE_TOGGLE_CONFIG_TOKEN,
          useValue: config,
        },
        {
          provide: FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN,
          useExisting: config.featuresStorageService,
        },
      ],
    };
  }
}
