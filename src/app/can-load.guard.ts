import { inject } from '@angular/core';
import { CanLoadFn, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const canLoadGuard: CanLoadFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isLoggedIn() || router.createUrlTree(['/user']);
};
