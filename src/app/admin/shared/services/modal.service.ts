import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  openSnackBar(message: string, action?: string, durationMS: number = 3000) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: durationMS,
    });
  }

  openDialog(title?: string, text?: string): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { text, title },
    });
    return dialogRef.afterClosed();
  }
}
