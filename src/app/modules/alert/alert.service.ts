import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private $snackBar:MatSnackBar) { }

  success(message: string, action: string = 'close', duration: number = 2000): void {
    this.$snackBar.open(message, action, {
      duration,
      panelClass: ['alert', 'alert-success']
    });
  }

  danger(message: string, action: string = 'close', duration: number = 2000): void {
    this.$snackBar.open(message, action, {
      duration,
      panelClass: ['alert', 'alert-danger']
    });
  }

  info(message: string, action: string = 'close', duration: number = 1000): void {
    this.$snackBar.open(message, action, {
      duration,
      panelClass: ['alert', 'alert-info']
    });
  }

}
