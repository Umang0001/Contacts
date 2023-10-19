import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { URL } from './utils/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  getAllUsers(){
    return this._http.get(URL);
  }
  addUser(user:any){
    let id=(new Date().getTime())
    let body={
      ...user,
      id
    } 
    return this._http.post(
    URL,
    body,
    {
      headers:{'content-type': 'application/json '}
    }
    )
  }


  
  loginStatus=localStorage.getItem("userId")?true:false
  isLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject(this.loginStatus)


  defalutUserDetails={}

  setDefalutUserDetails(val:any){
    this.defalutUserDetails=val;
  }

  showAddContact : Subject<boolean>=new Subject();
}
