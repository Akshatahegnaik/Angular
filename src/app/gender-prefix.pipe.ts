import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPrefix'
})
export class GenderPrefixPipe implements PipeTransform {

  transform(value: any, gender: string): string {
    if (gender === 'male') {
      return 'Mr. ' + value;
    } else if (gender === 'female') {
      return 'Ms. ' + value;
    } else {
      return value;
    }
  }

}
