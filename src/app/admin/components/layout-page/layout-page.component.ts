import { Component } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'admin-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'],
})
export class LayoutPageComponent {
  constructor(
    private loginService: LoginService,
    private modals: ModalService
  ) {}

  logOut() {
    this.loginService.logOut();
    this.modals.openSnackBar('Abandonando la aplicación');
  }
}
