import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private _commonService : CommonService,
    private _router : Router
  )
  {}
  isLoggedIn : boolean = false;
  ngOnInit(){
    this._commonService.isLoggedIn.subscribe((e)=>{
      this.isLoggedIn=e
    })
  }

  handleAddContact(){
    this._commonService.showAddContact.next(true)
  }

  handleLogout(){
    let res= confirm("Are you sure you want to logout?");
    if (res) {
      localStorage.removeItem("userId");
      this._commonService.isLoggedIn.next(false);
      this._router.navigate(["/"]);
    }
  }


}
