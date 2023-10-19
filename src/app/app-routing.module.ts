import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './route-guards/auth.guard';
import { BackToLoginGuard } from './route-guards/back-to-login.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canActivate:[AuthGuard]},
  {path:"sign-up",component:SignupComponent,canActivate:[AuthGuard]},
  {path:"dashboard", loadChildren:()=>import("./contacts/contacts.module").then(e=>e.ContactsModule),canActivate:[BackToLoginGuard]}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
