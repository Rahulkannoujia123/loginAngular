import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { ItemService } from '../service/item.service';
import { AdditemComponent } from '../additem/additem.component';
import { EdititemComponent } from '../edititem/edititem.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  columnToDisplay = ['No','itemName', 'itemId','BorrowerName','Base Location', 'CurrentLocation','Action'];

  itemList: any;
  edituser:any;
  userId:any
  constructor(
     private $itemService:ItemService,
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
    this.$dataService.headerData.next({headerText: 'item list', isHandset: false});
    this.getItemList();
  }
  addItem() {
    this.openDialog(null);
  }
  editItem(id:any) {
    this.userId = id;
    sessionStorage.setItem("id",id)
    console.log(id,"id")
    this.editopenDialog(null);
  }
  onSearch(search: string): void {
    this.search = search;
    this.getItemList();
  }

  pageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.getItemList();
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
    this.getItemList();
  }

  refresh() {
    this.getItemList();
  }

 
  openDialog(item: any): void {
    const dialogRef = this.$dialog.open(AdditemComponent, {
      height: 'auto',
      maxHeight: '90vh',
      width: 'auto'
    });
  }
  editopenDialog(item: any): void {
    const dialogRef = this.$dialog.open(EdititemComponent, {
      height: 'auto',
      maxHeight: '90vh',
      width: 'auto'
    });
  }

  getItemList(): void {
    this.isLoading = true
    this.$itemService.getItemList(this.page, this.limit,this.sort,this.search ).subscribe((res:any) => {
       this.isLoading = false
       console.log("race", res);
      this.itemList = res.data.list;
      console.log("race", this.itemList);
      this.totalUser = res.data.count;
   
    }, (err) => {
      this.isLoading = true;
       this.$alert.danger(err.message)
    })
  }
}
