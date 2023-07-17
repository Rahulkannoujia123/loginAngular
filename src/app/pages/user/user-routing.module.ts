import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { USER_DETAIL_ROUTE, USER_VIEW_ROUTE } from './constants/route.constant';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: USER_DETAIL_ROUTE.path,
  //   pathMatch: 'full',
  // },
  // {
  //   path: USER_DETAIL_ROUTE.path,
  //   component: UserListComponent
  // },
  // {
  //   path:`${USER_VIEW_ROUTE.path}/:id`,
  //   component:UserDetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
