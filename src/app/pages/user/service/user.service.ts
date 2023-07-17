import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CHANGE_USER_STATUS, USER_DETAILS, USER_LIST_API } from 'src/app/constants/api.constant';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private $http:HttpService) { }

  getUserList(
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
    return this.$http.get(USER_LIST_API, params);
  }

  updateUserStatus(_id:any, data:any){
    return this.$http.patch(`${CHANGE_USER_STATUS}/${_id}`,data, {})
  }


  getUserDetails(_id:any){
     return this.$http.get(`${USER_DETAILS}/${_id}`)
  }



}
