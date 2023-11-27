import { Component, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserDataService } from '../user-data.service';

interface Item {
  name: string;
  phone: string;
};

@Component({
  selector: 'app-contacts-home',
  templateUrl: './contacts-home.component.html',
  styleUrls: ['./contacts-home.component.scss']
})

export class ContactsHomeComponent {
  constructor(
    private _commonService : CommonService,
    private _userService : UserDataService,
    private _elemRef : ElementRef
  ){}
  showAddContact=false;
  loading=true;
  filterType="all"

  ngOnInit(){
    console.log("init");
    
    this._commonService.showAddContact.subscribe((e)=>{
      this.showAddContact=e
    })
    let userId=localStorage.getItem("userId")!;
    setTimeout(() => {
      this._userService.getPersonalData(userId).subscribe((e:any)=>{
        this.contacts=e.contacts || []
        this.allContacts=e.contacts || []
        this.userDetails=e
        this.loading=false
      })
    }, 2000);
  }
  userDetails:any={}
  contacts : any=[]
  allContacts:any = [];


  

  setContacts(contact:any){
    this.allContacts.push(contact);
    let filterType = this._elemRef.nativeElement.querySelector('input[name="list-type"]:checked')?.value || "all";
    this.handleContactsType(filterType)
    
    
  }

  handleRemoveContact(name:any){
    let userId=this.userDetails.id;
    this.contacts=this.contacts.filter((e:any)=>e.name.toLowerCase()!=name.toLowerCase())
    this.allContacts=this.contacts.filter((e:any)=>e.name.toLowerCase()!=name.toLowerCase())

    let updatedUser={
      ...this.userDetails,
      contacts:this.contacts
    }
    this._userService.updateUser(userId,updatedUser).subscribe()
  }

  showAddContactForm(){
    this.showAddContact=true
  }
  handleFavourite(name:any,index:any){
    let checkbox=this._elemRef.nativeElement.querySelector(`#check-${index}`)
    let userId=this.userDetails.id;
     this.contacts=this.allContacts.map((contact:any)=>{
        if (contact.name==name) {
           contact.favourite=checkbox.checked
        }
        return contact
      })

      let updatedUser={
        ...this.userDetails,
        contacts:this.contacts
      }
      console.log(updatedUser);
      

      this._userService.updateUser(userId,updatedUser).subscribe()
      let filterType = this._elemRef.nativeElement.querySelector('input[name="list-type"]:checked')?.value;
      this.handleContactsType(filterType)
  }

  handleContactsType(type:string){
    let searchVal = this._elemRef.nativeElement.querySelector("#search").value;
    switch (type) {
      case "all":
        this.contacts=this.allContacts.filter((e:any)=>e.name.toLowerCase().includes(searchVal.toLowerCase()));
        this.filterType="all"
        break;
      case "favourite":
        this.contacts=this.allContacts.filter((e:any)=>{
          if (e.favourite==true && e.name.toLowerCase().includes(searchVal.toLowerCase())) {
            return e
          }
        })
        this.filterType="favourite"
        break;

      default:
        break;
    }
  }

  handleAddContact(){
    this._commonService.showAddContact.next(true)
  }

  handleSearch(val:any){
    if(this.filterType==="all"){
      this.contacts = this.allContacts.filter((e:any)=>e.name.toLowerCase().includes(val.toLowerCase()))
    }
    else{
      this.contacts = this.allContacts.filter((e:any)=>e.name.toLowerCase().includes(val.toLowerCase()) && e.favourite===true)
      
    }
  }

}
