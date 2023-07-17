import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PASSWORD_REGEX } from 'src/app/constants/regex.constant';
import {  LOGIN_ROUTE } from 'src/app/constants/route.constant';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup = new FormGroup({
    passwordCurrent: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(7)]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(7),
    ]),
    passwordConfirm: new FormControl('', [Validators.required])
  },
    { validators: [this.matchPasswords('password', 'passwordConfirm')] }
  );
  constructor(
    private $loginService: LoginService,
    private $alert: AlertService,
    private $router: Router,
    private $dataService: DataService
  ) { }

  ngOnInit(): void {
    this.$dataService.headerData.next({
      headerText: 'change password',
      isHandset: false
    });
  }



  onSubmit(): void {
    console.log(this.changePasswordForm.value,'value..')
    console.log('change Password..')
    const passwordData = this.changePasswordForm.value;
    delete passwordData.passwordConfirm;
    this.$loginService.changePassword(passwordData).subscribe((data: any) => {
      this.changePasswordForm.reset();
      this.$alert.success(data.message);
      // localStorage.removeItem('adminAccessToken');
      this.$router.navigate([LOGIN_ROUTE.path]);
    });
  }
  private matchPasswords(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (control && matchingControl) {
        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          return;
        }

        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
      }
    };
  }

}

