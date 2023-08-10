import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService
){}

  canActivate(): boolean | Observable<boolean> | Promise<boolean>
  {
      if(this.authService.isAuthenticated() && this.authService.isAdmin()) {
        return true;
      } else {
        this.toastr.error('Vous n\'êtes pas autorisé à accéder à cette page', 'Erreur');
        this.router.navigate(['/auth/login']); // Redirigez vers la page non autorisée
        return false;
      }
  }
}
