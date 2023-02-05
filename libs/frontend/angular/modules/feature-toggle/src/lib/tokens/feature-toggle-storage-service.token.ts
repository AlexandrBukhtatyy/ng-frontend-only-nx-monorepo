import {InjectionToken} from "@angular/core";
import {FeaturesStorageService} from "../interfaces/features-storage-service.interface";

export const FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN =
  new InjectionToken<FeaturesStorageService>(
    'FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN'
  );
