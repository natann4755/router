import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocoladComponent } from './comp/cocolad/cocolad.component';
import { IseCreamComponent } from './comp/ise-cream/ise-cream.component';
import { ShukyComponent } from './comp/shuky/shuky.component';
import { SukiService } from './servises/gards/suki.service';
import { UsersComponent } from './comp/users/users.component';
import { LoginComponent } from './comp/login/login.component';
import { SheepsColoreComponent } from './comp/sheeps/sheeps-colore/sheeps-colore.component';
import { BlackComponent } from './comp/sheeps/black/black.component';
import { BrounComponent } from './comp/sheeps/broun/broun.component';
import { WriteComponent } from './comp/sheeps/write/write.component';
import { TablComponent } from './comp/age/tabl/tabl.component';



const routes: Routes = [

  { path: 'tabl', component: TablComponent },

  { path: 'sheepsColor', component: SheepsColoreComponent,
    children: [
      { path: 'blak', component: BlackComponent },
      { path: 'broun', component: BrounComponent },
      { path: 'write', component: BrounComponent },
    ]
},

  { path: 'chocolate', component: CocoladComponent },
  { path: 'ice-cream',
   component: IseCreamComponent,
   canActivate: [SukiService]},
  
  { path: 'shuki',
   component: ShukyComponent,
  data:{titel:"holloo", soky:"natann"} },
  { path: 'User/:idd', component: UsersComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo:"/tabl", pathMatch:'full'},
  { path: '**', redirectTo:"/ice-cream", pathMatch:'full'},
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
