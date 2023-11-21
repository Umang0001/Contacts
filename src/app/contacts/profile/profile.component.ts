import { Component, Input } from '@angular/core';
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
  @Input() userDetails:any;

}
