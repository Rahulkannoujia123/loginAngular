import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {  ITEM_ADD_API, ITEM_EDIT_API, ITEM_LIST_API } from 'src/app/constants/api.constant';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private $http: HttpService) { }

  getItemList(
    page: number = 1,
    limit: number,
    sort: string,
    search?: string
  ): Observable<any> {
    let params = new HttpParams();
    params = params.set('page', page.toString());
    params = params.set('limit', limit.toString());
    params = params.set('sort', sort);
    if (search) {
      params = params.set('search', search);
    }
    return this.$http.get(ITEM_LIST_API, params);
  }

  addItem(data:any){
    return this.$http.post(`${ITEM_ADD_API}`, data);
   }


  editItem(_id:any,data:any ) {
    console.log(_id,"_id")
    return this.$http.patch(`${ITEM_EDIT_API}/${_id}`,data)
  }



}
