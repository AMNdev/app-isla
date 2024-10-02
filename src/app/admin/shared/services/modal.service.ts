import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



import { DialogComponent } from '../dialog/dialog.component';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor() {}

  openSnackBar(message: string, action?: string, durationMS: number = 3000) {

    };
  }

  // openDialog(title?: string, text?: string): Observable<boolean> {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     data: { text, title },
  //   });
  //   return dialogRef.afterClosed();
  // }

  // loadImage() {
  //   console.log('load image modal')

  //   const dialogRef = this.dialog.open(ImageModalComponent, { },
  //   });
  //   return dialogRef.afterClosed();
  // }
// }
