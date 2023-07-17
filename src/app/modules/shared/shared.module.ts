import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AlertModule } from '../alert/alert/alert.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';
import { MatDividerModule } from '@angular/material/divider';
import { SizeValidationModule } from '../size-validation/size-validation.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule,
    MaterialModule,
    ReactiveFormsModule,
    SearchModule,
    MatDividerModule,
    SizeValidationModule
  ],
  exports:[
    AlertModule,
    MaterialModule,
    ReactiveFormsModule,
    SearchModule,
    MatDividerModule,
    SizeValidationModule
  ]
})
export class SharedModule { }
