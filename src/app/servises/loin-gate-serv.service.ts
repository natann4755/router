import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoinGateServService {

  islog:boolean=false;

  constructor(private router:Router) {
    console.log("router",router);
    
    this.router.events.subscribe(
      eve =>{ 
        if (eve instanceof NavigationEnd){
            if (this.router.url.includes('login')==false){
              if (this.islog==false){
                this.router.navigateByUrl('/login')
              }
            } 
        }
      }
    )}
}
