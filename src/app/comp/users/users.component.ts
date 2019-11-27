import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  User:any
  private api= "https://jsonplaceholder.typicode.com/users/"

  constructor(public http:HttpClient, public act:ActivatedRoute, public router:Router) {
    this.act.params.subscribe(dat=>{
      let id = dat.idd
      this.http.get(this.api+id).subscribe(da=>{
        this.User=da
      })
    }) 
  }

  ngOnInit() {

  }

}
