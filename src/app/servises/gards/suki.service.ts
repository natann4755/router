import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SukiService implements CanActivate {

  canActivate():boolean {
    let t ="kkkkkk"
    console.log(t);
    
    console.log("Method not implemented.");
    return false
  }
  constructor() { }
}
