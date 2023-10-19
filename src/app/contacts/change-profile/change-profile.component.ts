import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss']
})
export class ChangeProfileComponent {
  constructor(
    private _userService : UserDataService,
    private _formBuilder : FormBuilder
  )
  {}

  userDetails:any

  ngOnInit(){
    let userId=localStorage.getItem("userId")!;this._userService.getPersonalData(userId).subscribe((e:any)=>{
      this.userDetails=e;
      this.changeDetailsForm.get("name")?.setValue(e.name);
      this.changeDetailsForm.get("dob")?.setValue(e.dob);
      this.changeDetailsForm.get("phone")?.setValue(e.phone);
    })
  }

  changeDetailsForm = this._formBuilder.group({
    name:["",Validators.required],
    dob:["",Validators.required],
    phone:["",Validators.required]
  })

  handleChange(){
    if(this.changeDetailsForm.valid){
      let password=prompt("Enter password to change details");
      if (password === this.userDetails.password) {
        let userId= localStorage.getItem("userId")!;
        let updatedUser={
          ...this.changeDetailsForm.value,
          password:password,
          contacts:this.userDetails.contacts
        }
        this._userService.updateUser(userId,updatedUser).subscribe(e=>{
          console.log(e);
          
        })
      }
      else{
        alert("Invalid password ")
      }
    }
  }

}
