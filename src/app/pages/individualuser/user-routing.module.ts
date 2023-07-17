import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  IndividualUserListComponent } from './components/user-list/individualuser-list.component';
import { INDIVIDUALUSER_LIST_ROUTE,  } from './constants/route.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: INDIVIDUALUSER_LIST_ROUTE.path,
    pathMatch: 'full',
  },
  {
    path: INDIVIDUALUSER_LIST_ROUTE.path,
    component:  IndividualUserListComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
