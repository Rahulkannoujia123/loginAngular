import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AlertService } from '../modules/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = environment.apiUrl;

  constructor(   
    private $http: HttpClient,
    private $alert:AlertService,
    private $router: Router) { }

    get(url: string, params?: any): Observable<any> {
      return this.$http.get<any>(`${this.baseUrl}${url}`, { params }).pipe(
        catchError(this.errorHandler.bind(this))
      );
    }
  
    post(url: string, data: any): Observable<any> {
      return this.$http.post<any>(`${this.baseUrl}${url}`, data).pipe(
        catchError(this.errorHandler.bind(this))
      );
    }
  
    put(url: string, data: any, params?: any): Observable<any> {
      return this.$http.put<any>(`${this.baseUrl}${url}`, data, { params }).pipe(
        catchError(this.errorHandler.bind(this))
      );
    }
  
    patch(url: string, data: any, params?: any): Observable<any> {
      return this.$http.patch<any>(`${this.baseUrl}${url}`, data, { params }).pipe(
        catchError(this.errorHandler.bind(this))
      );
    }
  
    delete(url: string, params?: any): Observable<any> {
      return this.$http.delete(`${this.baseUrl}${url}`, { params }).pipe(
        catchError(this.errorHandler.bind(this))
      );
    }
  
  
  
    private errorHandler(response: any): Observable<{ error: string, message: string }> {
      const error = response.error;
      const status = response.status;
      let message = error.message;
      if (error.isTrusted) {
        message = 'No Internet Connection';
      }
      this.$alert.danger(message);
      if (status === 401) {
        sessionStorage.clear();
        localStorage.clear();
        this.$router.navigate(['/login']);
      }
      const err = { error, message };
      return throwError(err);
    }
}
