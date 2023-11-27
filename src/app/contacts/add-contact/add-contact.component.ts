import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  constructor(
    private _formBuilder : FormBuilder,
    private _commonService : CommonService,
    private _userService : UserDataService,
    private _elemRef : ElementRef
  ){}

  @Output() userContacts= new EventEmitter();
  ngAfterViewInit(){
    let nameField = this._elemRef.nativeElement.querySelector(".name");
    nameField.focus();  
  }

  loading=false;

  addContactForm=this._formBuilder.group({
    name:["",Validators.required],
    phone:["",Validators.required]
  })

  handleAdd(){
    if (this.addContactForm.valid) {
      this.loading=true
      let userId=localStorage.getItem("userId")!;
      this._userService.getPersonalData(userId).subscribe((e:any)=>{
        if (e) {
          let userContacts=e.contacts || [] 
          userContacts.push(this.addContactForm.value)
          console.log({userContacts});
          
          let updatedUser={
            ...e,
            contacts:userContacts
          }
          
          this._userService.updateUser(userId,updatedUser).subscribe((res:any)=>{
            console.log(res);
            this.loading=false
            this.hideAddContact()
            this.userContacts.emit(this.addContactForm.value)
          })
        }
      })
    
  }
}

  hideAddContact(){
    this._commonService.showAddContact.next(false)
  }

}
