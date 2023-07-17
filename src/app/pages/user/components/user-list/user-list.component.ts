import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { USER_VIEW_ROUTE } from '../../constants/route.constant';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  columnToDisplay = ['No','Name', 'email','phoneNumber','Action'];
 
  userList: any;
  imageData: any;
  constructor(
     private $userService:UserService,
     private $alert:AlertService,
     private $router:Router,
     private $dialog:MatDialog,
     private $dataService: DataService
     ) { }
  totalUser=1;
  baseUrl = environment.baseUrl;
  page = 1;
  limit = 10;
  sort = 'Name';
  search = '';
  sortDir = 'desc';
  imageUrl = environment.baseUrl
  isLoading:boolean = false;
  ngOnInit(): void {
    this.$dataService.headerData.next({headerText: 'user list', isHandset: false});
    this.getUserList();
  }

  

  pageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.getUserList();
  }

  onSearch(search: string): void {
    this.search = search;
    this.getUserList();
  }

  sortChange(sort: Sort): void {
    let sortBy = sort.active;
    if (sort.direction === 'asc') {
      this.sort = sortBy;
      this.sortDir = 'asc';
    } else if (sort.direction === 'desc') {
      this.sort = `-${sortBy}`;
      this.sortDir = 'desc';
    } else {
      return;
    }
    this.getUserList();
  }

  refresh() {
    this.getUserList();
  }
  userId:any;
  status:any;
  getId(id:any,number:any){
    this.userId = id;
    this.status = number;
    sessionStorage.setItem("id",id)
  
  }

  getUserList(): void {
    this.isLoading = true
    this.$userService.getUserList(this.page, this.limit,this.sort,this.search ).subscribe((res:any) => {
       this.isLoading = false
      this.userList = res.data.user.list;
      this.totalUser = res.data.user.count;
    }, (err) => {
      this.isLoading = true;
       this.$alert.danger(err.message)
    })
  }
  changeStatus(id:any,isApproved:any) {
    let data = {
      isApproved :isApproved
    }
    this.$userService.updateUserStatus(id,data).subscribe((res: any) => {
      if (res) {
        sessionStorage.clear();
        this.$alert.success(res.message);
      }
    }, (err) => {
      console.log(err.message);
    })
  }
}
 


