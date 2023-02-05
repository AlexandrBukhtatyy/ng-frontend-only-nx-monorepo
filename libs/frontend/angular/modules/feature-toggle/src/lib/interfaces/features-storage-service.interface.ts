import {BehaviorSubject} from "rxjs";
import {FeatureFlagsType} from "./feature-flags.type";

export interface FeaturesStorageService {
  featureFlags$$: BehaviorSubject<FeatureFlagsType>;
  isEnabled(key: string): boolean;
}
