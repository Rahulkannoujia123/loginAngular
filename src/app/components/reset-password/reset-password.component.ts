import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PASSWORD_REGEX } from 'src/app/constants/regex.constant';
import {  LOGIN_ROUTE } from 'src/app/constants/route.constant';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token:any;
  resetPasswordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(7)]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(7),
    ]),
    
  },
   
  );
  constructor(
    private $loginService: LoginService,
    private $alert: AlertService,
    private $router: Router,
    private router :ActivatedRoute,
    private $dataService: DataService
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((res:any) => {
      this.token = res.token;
      console.log(this.token,"this,token")
    })

    this.$dataService.headerData.next({
      headerText: 'reset password',
      isHandset: false
    });
  }
  onSubmit(): void {
    let Data = {
      password : this.resetPasswordForm.value.password,
      resetToken : this.token
    }  
    this.$loginService.resetPassword(Data).subscribe((data: any) => {     
      if(data.status == 200){      
        this.$alert.success(data.message);
         this.$router.navigate([LOGIN_ROUTE.path]);
      }     
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
