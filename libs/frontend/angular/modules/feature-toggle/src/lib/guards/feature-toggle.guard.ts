import {inject} from '@angular/core';
import {CanMatchFn, Router} from '@angular/router';
import {FEATURE_TOGGLE_CONFIG_TOKEN} from "../tokens/feature-toggle-config.token";
import {FeatureToggleService} from "../services/feature-toggle.service";

export function featureToggleGuard(params: {
  key: string;
  redirectTo?: any[];
}): CanMatchFn {
  return () => {
    const router = inject(Router);
    const config = inject(FEATURE_TOGGLE_CONFIG_TOKEN);
    const featureToggleService = inject(FeatureToggleService);

    if (featureToggleService.isEnabled(params.key)) {
      return true;
    } else {
      return router.createUrlTree(
        params.redirectTo ?? [config.guardFailureUri]
      );
    }
  };
}
