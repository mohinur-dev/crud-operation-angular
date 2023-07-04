import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ShowCardComponent } from './show-card/show-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertComponent,
    ShowComponent,
    UpdateComponent,
    SigninComponent,
    SignupComponent,
    ShowCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
