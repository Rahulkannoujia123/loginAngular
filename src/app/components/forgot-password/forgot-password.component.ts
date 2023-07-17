import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PASSWORD_REGEX } from 'src/app/constants/regex.constant';
import {  LOGIN_ROUTE } from 'src/app/constants/route.constant';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  link:any;
  newPasswordlink:any;

  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(7)]),
  },
  
  );
  private _route: any;
  constructor(
    private $loginService: LoginService,
    private $alert: AlertService,
    private route: Router,
    private $dataService: DataService
  ) { }

  ngOnInit(): void {
    this.$dataService.headerData.next({
      headerText: 'forgot password',
      isHandset: false
    });
  }

  onSubmit(): void {
    console.log("hello")
    let Data = {
      email : this.forgotPasswordForm.value.email
    }
   this.$loginService.forgotPassword(Data).subscribe((data: any) => {
      console.log(data,"email")   
        this.link = data.data.endPoint;
        console.log( this.link,'kjk...')      
        this.forgotPasswordForm.reset();
        this.$alert.success(data.message);
        this.newPasswordlink = this.link.split('=');
        this.route.navigate(['/reset-password'], {queryParams:{token:this.link}});
        
      
     
      // localStorage.removeItem('adminAccessToken');
     
    });
  }
 
}
      

