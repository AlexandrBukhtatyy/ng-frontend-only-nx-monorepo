import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    loadComponent: () => import('../pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
  }
];
