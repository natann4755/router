import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabl',
  templateUrl: './tabl.component.html',
  styleUrls: ['./tabl.component.css']
})
export class TablComponent implements OnInit {

  pupil=[
    {name:"avi",age:1990},
    {name:"bibi",age:1991},
    {name:"gigi",age:1992},
    {name:"didi",age:1993},
  ]
  constructor() { }

  ngOnInit() {
  }

  corectyaer(num:number):number{
    let d = new Date().getFullYear()
    return d-num
  }

}
