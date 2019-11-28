import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value:number):number {
    let d = new Date().getFullYear()
    return d-value
  }

}
