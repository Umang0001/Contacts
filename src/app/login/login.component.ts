import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(
      private _formBuilder: FormBuilder, 
      private _commonService:CommonService,
      private _router:Router,
      private _elemRef : ElementRef
      ){}

      showLoading : boolean = false;
      onceSubmitted : boolean = false

    ngOnInit(){
      let userDetails : any = this._commonService.defalutUserDetails
        this.loginForm.get("username")?.setValue(userDetails?.username);
        this.loginForm.get("password")?.setValue(userDetails.password);
    }

    ngAfterViewInit(){
      let nameField = this._elemRef.nativeElement.querySelector(".name");
      nameField.focus();  
    }

    loginForm=this._formBuilder.group({
      username:["",[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
      password:["",[Validators.required]],
    })  

    handleLogin(){
      this.onceSubmitted=true
      if (this.loginForm.valid) {
        this.showLoading=true
        
        const {username,password}=this.loginForm.value;
        this._commonService.getAllUsers().subscribe((res:any) => {
          let userList=res;
          let result=userList.find((user:any)=>user.name.toLowerCase()==username!.toLowerCase() && user.password.toLowerCase()==password!.toLowerCase())
          if (result) {
            localStorage.setItem("userId",result.id)
            this._commonService.isLoggedIn.next(true);
            this._router.navigate(["dashboard"]) 
          }
          else{
            this.showLoading=false
            alert("Invalid username/password")
          }
          
          
        })
      }

    }

}
