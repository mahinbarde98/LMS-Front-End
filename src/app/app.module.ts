import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoancategoryComponent } from './component/loancategory/loancategory.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoanComponent } from './component/loan/loan.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LoancategoryComponent,
    AdminComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
