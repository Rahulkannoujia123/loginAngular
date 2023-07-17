import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ContainerComponent } from './container/container.component';
// import { ValidatePipe } from './modules/validate-error/validate.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { SharedModule } from './modules/shared/shared.module';
import { ValidateErrorModule } from './modules/validate-error/validate-error/validate-error.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from './modules/dialog/dialog.module';
import { MaterialModule } from './modules/material/material.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ItemComponent } from './pages/items/item-list/item.component';
// import { IndividualUserListComponent } from './pages/individualuser/components/user-list/individualuser-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePasswordComponent,
    ItemComponent,
    ContainerComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    ValidateErrorModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
