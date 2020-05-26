import { Pipe, PipeTransform } from '@angular/core';
import { ICharacter, IFilterOption } from '../models/interfaces';

@Pipe({
  name: 'filterbyGender',
})
export class FilterbyGenderPipe implements PipeTransform {
  transform(value: ICharacter[], args: IFilterOption[]): ICharacter[] {
    if (!args.length) {
      return value;
    }
    let filteredValue = [];
    args.forEach((arg) => {
      filteredValue.push(
        ...value.filter(
          (val) => val.gender.toLowerCase() === arg.name.toLowerCase()
        )
      );
    });
    return filteredValue;
  }
}
