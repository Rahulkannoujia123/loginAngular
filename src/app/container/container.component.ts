import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';
import {  CHANGE_PASSWORD_ROUTE,DASHBOARD_ROUTE, INDIVIDUAL_USER_ROUTE,ITEM_MANAGEMENT_ROUTE,LOGIN_ROUTE, USER_ROUTE } from '../constants/route.constant';
import { DialogService } from '../modules/dialog/service/dialog.service';
import { DataService } from '../services/data.service';
import { MaterialModule } from '../modules/material/material.module';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit {
  dashboardRoute=DASHBOARD_ROUTE;
  changePasswordRoute = CHANGE_PASSWORD_ROUTE;
  individualuserRoute=INDIVIDUAL_USER_ROUTE;
  itemManagementRoute=ITEM_MANAGEMENT_ROUTE;
  mode: any = 'side';
  opened = true;
  HeaderText = '';
  isSmallDevice = false;
  isLoading = false;
  isHandset = new BehaviorSubject<boolean>(false);
  @ViewChild('drawer')
  drawer!: MatDrawer;
  constructor(
    private $dialogService: DialogService,
    private $router: Router,
    private $dataService: DataService
  ) {
    if (window.innerWidth < 980) {
      this.isSmallDevice = true;
      this.isHandset.next(true);
    }
    fromEvent(window, 'resize').subscribe(data => {
      if (window.innerWidth < 980) {
        this.isSmallDevice = true;
        this.isHandset.next(true);
      } else {
        this.isSmallDevice = false;
        this.isHandset.next(false);
      }
    });
  }

  ngOnInit(): void {

  }




  logOut(): void {
    this.$dialogService.confirm(
      (status: boolean) => {
        if (status) {
          localStorage.removeItem('adminAccessToken');
          this.$router.navigateByUrl(LOGIN_ROUTE.url);
        }
      },
      'Are you sure you want to logout?'
    );
  }

  ngAfterViewInit(): void {
    this.isHandset
      .pipe(
        delay(0)
      )
      .subscribe((data) => {
        if (data) {
          this.mode = 'over';
          this.opened = false;
        } else {
          this.mode = 'side';
          this.opened = true;
        }
      });


    this.$dataService.headerData.pipe(
      delay(0)
    )
      .subscribe((res: { headerText: string, isHandset: boolean }) => {
        this.HeaderText = res.headerText;
        // if (!this.isSmallDevice) {
        //   if (res.isHandset) {
        //     this.isHandset.next(true)
        //   }
        //   else {
        //     this.isHandset.next(false);
        //   }
        // }
      })
  }

}
