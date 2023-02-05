import {InjectionToken} from "@angular/core";
import {FeatureToggleConfig} from "../interfaces/feature-toggle-config.interface";

export const FEATURE_TOGGLE_CONFIG_TOKEN =
  new InjectionToken<FeatureToggleConfig>('FEATURE_TOGGLE_CONFIG_TOKEN');
