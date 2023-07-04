import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { ShowComponent } from './show/show.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';
import { ShowCardComponent } from './show-card/show-card.component';

const routes: Routes = [
  {path:"", component:SigninComponent},
  {path:"home", component:HomeComponent},
  {path:"insert", component:InsertComponent},
  {path:"show", component:ShowComponent},
  {path:"signin", component:SigninComponent},
  {path:"update/:id", component:UpdateComponent},
  {path:"signup", component:SignupComponent},
  {path:"show-card", component:ShowCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
