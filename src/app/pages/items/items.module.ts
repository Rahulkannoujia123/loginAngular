import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ItemComponent } from './item-list/item.component';
import { EdititemComponent } from './edititem/edititem.component';
import { AdditemComponent } from './additem/additem.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    ItemComponent,
    EdititemComponent,
    AdditemComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    MaterialModule,
    SharedModule,
    ItemsRoutingModule
  ],
  exports : [
    MaterialModule,
    SharedModule,
  ]
})
export class ItemsModule { }
