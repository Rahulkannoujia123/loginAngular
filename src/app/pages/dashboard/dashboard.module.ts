import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { UserModule } from '../user/user.module';
@NgModule({
  declarations: [
    DashboardComponent,
   
  ],
  imports: [
    CommonModule,
    UserModule,
    DashboardRoutingModule,    
    MaterialModule
  ]
})
export class DashboardModule { }
