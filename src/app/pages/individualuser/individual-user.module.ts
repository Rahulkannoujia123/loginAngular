import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateErrorModule } from 'src/app/modules/validate-error/validate-error/validate-error.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { IndividualUserListComponent } from './components/user-list/individualuser-list.component';
import { AddindividualuserComponent } from './components/addindividualuser/addindividualuser.component';
import { IndividualUserRoutingModule } from './individual-user-routing.module';
import { EditindividualComponent } from './components/editindividual/editindividual.component';


@NgModule({
  declarations: [
    IndividualUserListComponent,
    AddindividualuserComponent,
    EditindividualComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IndividualUserRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatCardModule,
    ValidateErrorModule,
  ],
  exports: [
    SharedModule,
    MaterialModule,
    MatDialogModule,
    ValidateErrorModule
  ]
})
export class IndividualUserModule { }