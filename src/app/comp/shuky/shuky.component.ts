import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shuky',
  templateUrl: './shuky.component.html',
  styleUrls: ['./shuky.component.css']
})
export class ShukyComponent implements OnInit {

  tite:string
  suki:string
  constructor(public activero:ActivatedRoute) { }

  ngOnInit() {
    this.activero.data
    .subscribe(dd=>{
      console.log(dd)
      this.tite=dd.titel 
      this.suki=dd.soky
    })
  }

}
