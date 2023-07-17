import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { FIELD_TYPE } from 'src/app/constants/input.constant';
import { EMAIL_REGEX } from 'src/app/constants/regex.constant';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.$fb.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
    password: ['', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(15)]]
  });
  
  isLoading = false;
  hide = true;
  fieldType: any = FIELD_TYPE;
  constructor(
    private $router: Router,
    private $loginService: LoginService,
    private $alert: AlertService,
    private $fb: FormBuilder
  ) { }


  ngOnInit(): void {

  }

  login(): void {
    const loginData = this.loginForm.value;
    this.isLoading = true;
    this.$loginService.logIn(loginData).subscribe((data: any) => {
      const accessToken = data.data.token;
      localStorage.setItem('adminAccessToken', accessToken);
      this.isLoading = false;
      this.$router.navigateByUrl('/');
    }, err => {
      this.isLoading = false;
    });
  }

}
