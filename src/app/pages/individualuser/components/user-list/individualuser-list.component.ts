import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { UserService } from '../../service/user.service';
import { AddindividualuserComponent } from '../addindividualuser/addindividualuser.component';
import { EditindividualComponent } from '../editindividual/editindividual.component';


@Component({
  selector: 'app-individualuser-list',
  templateUrl: './individualuser-list.component.html',
  styleUrls: ['./individualuser-list.component.scss']
})
export class IndividualUserListComponent implements OnInit {
  columnToDisplay = ['No','name', 'Email','PhoneNumber','Action'];

  userList: any;
  edituser:any;
  userId:any
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
  addIndividualUser() {
    this.openDialog(null);
  }
  editIndividualUser(id:any) {
    this.userId = id;
    sessionStorage.setItem("id",id)
    console.log(id,"id")
    this.editopenDialog(null);
  }
  onSearch(search: string): void {
    this.search = search;
    this.getUserList();
  }

  pageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
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

 
  openDialog(individualuser: any): void {
    const dialogRef = this.$dialog.open(AddindividualuserComponent, {
      height: 'auto',
      maxHeight: '90vh',
      width: 'auto'
    });
  }
  editopenDialog(individualuser: any): void {
    const dialogRef = this.$dialog.open(EditindividualComponent, {
      height: 'auto',
      maxHeight: '90vh',
      width: 'auto'
    });
  }

  getUserList(): void {
    this.isLoading = true
    this.$userService.getIndividualUserList(this.page, this.limit,this.sort,this.search ).subscribe((res:any) => {
       this.isLoading = false
       console.log("race", res);
      this.userList = res.data.user.list;
      console.log("race", this.userList);
      this.totalUser = res.data.user.count;
   
    }, (err) => {
      this.isLoading = true;
       this.$alert.danger(err.message)
    })
  }

 
 

}