import { Routes } from '@angular/router';
import { canLoadGuard } from './can-load.guard';
import { roleGuard } from './role.guard';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin.routes'),
    canLoad: [canLoadGuard],
    canActivate: [roleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'user',
    loadChildren: () => import('./user.routes'),
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
];
