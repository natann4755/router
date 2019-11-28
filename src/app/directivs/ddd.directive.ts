import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dd]'
})
export class DddDirective {

  constructor() {
    console.log("i am directiv");
    
   }

  muve(){
    
  }

}
