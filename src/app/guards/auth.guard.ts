import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoginService } from '../admin/shared/services/login.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService.validarToken().pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
            console.log('redirigiendo')

            router.navigateByUrl('/carmen');
          }
        })
  )
};
