import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES = [
  { path: 'routePath', component: Component },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);