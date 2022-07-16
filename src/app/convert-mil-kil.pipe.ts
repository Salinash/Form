import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilKil'
})
export class ConvertMilKilPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if (!value){
      return new Error ('Target unit not supported');
    }
    switch (targetUnits){
      case 'km': return value * 1.609344;
      case 'm': return value * 1.609344 * 1000;
      case 'cm': return value * 1.609344 * 1000 * 100;
      default: throw new Error ('Target unit not supported');
    }    
  }

}
