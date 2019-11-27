import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocoladComponent } from './comp/cocolad/cocolad.component';
import { IseCreamComponent } from './comp/ise-cream/ise-cream.component';
import { ShukyComponent } from './comp/shuky/shuky.component';
import { UsersComponent } from './comp/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './comp/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CocoladComponent,
    IseCreamComponent,
    ShukyComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
