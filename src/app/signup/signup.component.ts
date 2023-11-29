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

  requiredMsg="This is a required field.";
  onceSubmitted : boolean = false;

  signupForm=this._formBuilder.group({
    name:["",[Validators.required,Validators.minLength(3)]],
    password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],
    phone:["",[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    dob:["",Validators.required]
  })

  validateNumber(event:any) {
    const keyCode = event.keyCode;

    const excludedKeys = [8, 37, 39, 46];

    if (!((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }

  handleSignup(){
    this.onceSubmitted=true;
    if (this.signupForm.valid) {
      this._commonService.addUser(this.signupForm.value).subscribe((e:any)=>{
        let userDetails={
          username:e.name,
          password:e.password
        }
        if (e) {
          localStorage.setItem("userId",e.id)
          this._commonService.isLoggedIn.next(true);
          this._router.navigate(['/dashboard'])
        }
        else{
          alert("some error occured")
        } 
      })
    }
    
  }

}
