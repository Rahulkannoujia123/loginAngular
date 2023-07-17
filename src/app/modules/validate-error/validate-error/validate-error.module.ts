import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatePipe } from '../validate.pipe';



@NgModule({
  declarations: [
    ValidatePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValidatePipe
  ]
})
export class ValidateErrorModule { }
