import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPersonalProfileComponent } from './my-personal-profile/my-personal-profile.component';
import { MyPofessionalProfileComponent } from './my-pofessional-profile/my-pofessional-profile.component';
import { MyContactProfileComponent } from './my-contact-profile/my-contact-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';




@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    MyPersonalProfileComponent,
    MyPofessionalProfileComponent,
    MyContactProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
