import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CHANGE_PASSWORD_API, FORGOT_PASSWORD_API, LOGIN_API, RESET_PASSWORD_API } from '../constants/api.constant';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private $http: HttpService,
    private $fb: FormBuilder
  ) { }

  loginForm(): FormGroup {
    return this.$fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(15)]]
    });
  }

  logIn(data: { email: string; password: string }): Observable<any> {
    return this.$http.post(LOGIN_API, data);
  }

  changePassword(data: any): Observable<{ message: string }> {
    return this.$http.post(CHANGE_PASSWORD_API, data);
  }
  forgotPassword(data: any): Observable<{ message: string }> {
    return this.$http.post(FORGOT_PASSWORD_API, data);
  }
  resetPassword(data: any): Observable<{ message: string }> {
    return this.$http.post(RESET_PASSWORD_API, data);
  }
}


