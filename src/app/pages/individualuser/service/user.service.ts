import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { INDIVIDUAL_USER__ADD_API, INDIVIDUAL_USER__EDIT_API, INDIVIDUAL_USER__LIST_API } from 'src/app/constants/api.constant';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private $http: HttpService) { }

  getIndividualUserList(
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
    return this.$http.get(INDIVIDUAL_USER__LIST_API, params);
  }

  addIndividualUser(data:any){
    return this.$http.post(`${INDIVIDUAL_USER__ADD_API}`, data);
   }



  editIndividualUser(_id:any,data:any ) {
    console.log(_id,"_id")
    return this.$http.patch(`${INDIVIDUAL_USER__EDIT_API}/${_id}`,data)
  }



}
