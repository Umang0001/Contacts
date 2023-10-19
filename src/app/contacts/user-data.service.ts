import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private _http : HttpClient
  ) { }

  getPersonalData(id:string){
    return this._http.get(URL+"/"+id)
  }

  updateUser(id:any,data:any){
    return this._http.put(
      URL+"/"+id,
      JSON.stringify(data),
      {
        headers:{'content-type': 'application/json '}
      }
    )
  }

  deleteUser(id:string){
    return this._http.delete(URL+"/"+id);
  }


}
