import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public hide = true;

  // todo: eliminar correo y contraseña
  public loginForm = this.fb.group({
    email: ['carnesi7@hotmail.com', [Validators.required, Validators.email]],
    password: ['carmencita', [Validators.required, Validators.minLength(6)]],
  });

  // usuario: carnesi7@hotmail.com
  // passw: carmencita
  // usuario: amarqueznovella@hotmail.com
  // passw: antonio

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private modals: ModalService
  ) {}

  login() {
    if (this.loginForm.invalid) {
      console.log('Invalid login form');
      return;
    }

    // todo: cambiar por loader, spinner o algo
    this.modals.openSnackBar('Accediendo...');

    this.loginService.loginUser(this.loginForm.value as Usuario).subscribe({
      next: (resp) => {
        this.router.navigateByUrl('carmen/admin', { skipLocationChange: true });
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  invalidField(field: string) {
    if (this.loginForm.get(field)!.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.loginForm.get(field)!.hasError('email')) {
      return 'Not a valid email';
    }
    if (this.loginForm.get(field)!.hasError('minlength')) {
      return 'At least 6 characters';
    }
    return '';
  }
}
