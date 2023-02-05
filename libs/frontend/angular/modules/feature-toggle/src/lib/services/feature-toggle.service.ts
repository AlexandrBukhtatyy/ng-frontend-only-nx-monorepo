import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {FeaturesStorageService} from "../interfaces/features-storage-service.interface";
import {FeatureFlagsType} from "../interfaces/feature-flags.type";
import {FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN} from "../tokens/feature-toggle-storage-service.token";

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  onChanges$: Observable<FeatureFlagsType>;

  constructor(
    @Inject(FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN)
    private storageService: FeaturesStorageService
  ) {
    this.onChanges$ = storageService.featureFlags$$.asObservable();
  }

  isEnabled(key: string): boolean {
    return this.storageService.isEnabled(key);
  }
}
