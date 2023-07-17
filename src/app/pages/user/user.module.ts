import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateErrorModule } from 'src/app/modules/validate-error/validate-error/validate-error.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UserListComponent,
 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    ValidateErrorModule,
  ],
  exports: [
    SharedModule,
    MaterialModule,
    MatDialogModule,  
    UserListComponent,
    ValidateErrorModule
  ]
})
export class UserModule { }
