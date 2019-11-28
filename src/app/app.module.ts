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
import { SheepsColoreComponent } from './comp/sheeps/sheeps-colore/sheeps-colore.component';
import { BlackComponent } from './comp/sheeps/black/black.component';
import { BrounComponent } from './comp/sheeps/broun/broun.component';
import { WriteComponent } from './comp/sheeps/write/write.component';
import { TablComponent } from './comp/age/tabl/tabl.component';
import { YearPipe } from './pepes/year.pipe';
import { DddDirective } from './directivs/ddd.directive';

@NgModule({
  declarations: [
    AppComponent,
    CocoladComponent,
    IseCreamComponent,
    ShukyComponent,
    UsersComponent,
    LoginComponent,
    SheepsColoreComponent,
    BlackComponent,
    BrounComponent,
    WriteComponent,
    TablComponent,
    YearPipe,
    DddDirective
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
