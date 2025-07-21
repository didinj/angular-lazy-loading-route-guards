import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const allowedRoles: string[] = route.data?.['roles'] || [];

  if (auth.isLoggedIn() && allowedRoles.includes(auth.getUserRole())) {
    return true;
  }

  return router.createUrlTree(['/user']);
};
