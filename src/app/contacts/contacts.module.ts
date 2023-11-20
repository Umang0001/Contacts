import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { ContactsHomeComponent } from './contacts-home/contacts-home.component';
import { ProfileComponent } from './profile/profile.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsShimmerComponent } from './contacts-shimmer/contacts-shimmer.component';
import { ProfileDetailsShimmerComponent } from './profile-details-shimmer/profile-details-shimmer.component';

const routes :Routes = [
  { path:"",component : DashboardComponent,children:[
    { path:"",component : ContactsHomeComponent},
    { path:"change-profile",component : ChangeProfileComponent},
  ]}
 
  
]

@NgModule({
  declarations: [
    ContactsHomeComponent,
    ProfileComponent,
    AddContactComponent,
    ChangeProfileComponent,
    DashboardComponent,
    ContactsShimmerComponent,
    ProfileDetailsShimmerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers:[
    AsyncPipe
  ]
})
export class ContactsModule { }
