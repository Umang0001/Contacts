import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(
    private _userService :UserDataService
  )
  {}
  userDetails:any

  ngOnInit(){
    let userId=localStorage.getItem("userId")!
    this._userService.getPersonalData(userId).subscribe((e:any)=>{
      setTimeout(() => {
        
        this.userDetails=e
      }, 2000);
      
    })
  }

}
