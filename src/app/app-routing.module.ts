import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import {
  CHANGE_PASSWORD_ROUTE,
  DASHBOARD_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  INDIVIDUAL_USER_ROUTE,
  LOGIN_ROUTE,
  RESET_PASSWORD_ROUTE,
  USER_ROUTE,
} from './constants/route.constant';
import { ContainerComponent } from './container/container.component';
import { AuthGuard } from './guards/auth.guard';
import { ProtectGuard } from './guards/protect.guard';
import { INDIVIDUALUSER_LIST_ROUTE } from './pages/individualuser/constants/route.constant';
import { IndividualUserListComponent } from './pages/individualuser/components/user-list/individualuser-list.component';
import { ItemComponent } from './pages/items/item-list/item.component';
import { ITEM_LIST_ROUTE } from './pages/items/constants/route.constant';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,

    children: [
      {
        path: DASHBOARD_ROUTE.path,
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },

      // {
      //   path: USER_ROUTE.path,
      //   loadChildren: () => import('./pages/individualuser/user.module').then(m => m.UserModule)
      // },
      {
        path: INDIVIDUAL_USER_ROUTE.path,
        loadChildren: () =>
          import('./pages/individualuser/individual-user.module').then(
            (m) => m.IndividualUserModule
          ),
      },
      {
        path: CHANGE_PASSWORD_ROUTE.path,
        component: ChangePasswordComponent,
      },
      {
        path: INDIVIDUALUSER_LIST_ROUTE.path,
        component: IndividualUserListComponent,
      },
      {
        path: ITEM_LIST_ROUTE.path,
        component: ItemComponent,
      },
    ],
  },
  {
    path: LOGIN_ROUTE.path,
    component: LoginComponent,
  },
  {
    path: FORGOT_PASSWORD_ROUTE.path,
    component: ForgotPasswordComponent,
  },
  {
    path: RESET_PASSWORD_ROUTE.path,
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
