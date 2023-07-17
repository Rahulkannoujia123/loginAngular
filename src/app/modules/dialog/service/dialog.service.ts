import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private $dialog: MatDialog,
  ) { }

  confirm(
    cb: (status: boolean) => void,
    message: string,
    message2 = '',
    yBtnTxt = 'Yes',
    nBtnTxt = 'No'
  ): void {
    const data = {
      message,
      yBtnTxt,
      nBtnTxt,
      message2
    };
    const $dialogRef = this.$dialog.open(
      ConfirmComponent,
      {
        width: 'auto',
        height: 'auto',
        minHeight: '12rem',
        minWidth: '20rem',
        data,
        disableClose: true,
        panelClass: 'confirm-dialog'
      }
    );

    $dialogRef.afterClosed().subscribe(res => {
      cb(res);
    });
  }
}
