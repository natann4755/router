import { Component } from '@angular/core';
import { LoinGateServService } from './servises/loin-gate-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rawtar';
  constructor(public svslo:LoinGateServService){

  }

}
