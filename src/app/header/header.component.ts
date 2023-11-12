import { Component, ElementRef } from '@angular/core';
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
    private _router : Router,
    private _elemRef : ElementRef
  )
  {}
  isLoggedIn : boolean = false;
  burgerMenu:any;
  mobileAside:any;
  ngOnInit(){
    this._commonService.isLoggedIn.subscribe((e)=>{
      this.isLoggedIn=e
    })
  }

  ngAfterViewInit(){
    this.burgerMenu=this._elemRef.nativeElement.querySelector(".burger-menu");
    this.mobileAside=this._elemRef.nativeElement.querySelector(".mobile-aside")
  }

  handleAddContact(){
    this.closeMobileMenu()
    
    this._commonService.showAddContact.next(true)
  }

  handleLogout(){
    let res= confirm("Are you sure you want to logout?");
    if (res) {
      this.closeMobileMenu()
      localStorage.removeItem("userId");
      this._commonService.isLoggedIn.next(false);
      this._router.navigate(["/"]);
    }
  }

  handleBurgerMenu(){
    if (this.burgerMenu.classList.contains("open")) {
      this.closeMobileMenu()
    }
    else{
      this.openMobileMenu()
    }
  }

  handleLogin(){
    this.closeMobileMenu()
    this._router.navigate(["/login"])
  }
  handleSignup(){
    this.closeMobileMenu()
    this._router.navigate(["/sign-up"])
  }


  openMobileMenu(){
    this.burgerMenu.classList.add("open")
    this.mobileAside.classList.remove("hide")
  }

  closeMobileMenu(){
    this.burgerMenu.classList.remove("open")
    this.mobileAside.classList.add("hide")
  }


}
