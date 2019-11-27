import { Component, OnInit } from '@angular/core';
import { LoinGateServService } from '../../servises/loin-gate-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public svslog:LoinGateServService, public rat:Router) { }

  ngOnInit() {
  }

  login(){
    this.svslog.islog=true
    console.log("trou",this.svslog.islog);
    
    this.rat.navigateByUrl('')
  }
}
