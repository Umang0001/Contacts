import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    private _formBuilder:FormBuilder,
    private _commonService:CommonService,
    private _router:Router,
    private _elemRef : ElementRef
  ){}

  ngAfterViewInit(){
    let nameField = this._elemRef.nativeElement.querySelector(".name");
    nameField.focus();  
  }

  signupForm=this._formBuilder.group({
    name:["",Validators.required],
    password:["",Validators.required],
    phone:["",Validators.required],
    dob:["",Validators.required]
  })

  handleSignup(){
    if (this.signupForm.valid) {
      this._commonService.addUser(this.signupForm.value).subscribe((e:any)=>{
        let userDetails={
          username:e.name,
          password:e.password
        }
        if (e) {
          this._commonService.setDefalutUserDetails(userDetails)
          this._router.navigate(['/login'])
        }
        else{
          alert("some error occured")
        } 
      })
    }
    
  }

}
