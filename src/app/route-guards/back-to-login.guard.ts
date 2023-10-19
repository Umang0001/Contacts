import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackToLoginGuard implements CanActivate, CanLoad {
  constructor(
    private _router : Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {       
    return this.isBackToLogin()
  }
  isBackToLogin(){
    let userId=localStorage.getItem("userId");
    
    if (!userId) {
      this._router.navigate(["/"]);
      return false
    }
    return true
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isBackToLogin()
  }
}
