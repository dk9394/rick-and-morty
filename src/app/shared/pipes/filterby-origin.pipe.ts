import { Pipe, PipeTransform } from '@angular/core';

import { ICharacter, IFilterOption } from '../models/interfaces';
import { Filters } from '../filter-options';

@Pipe({
  name: 'filterbyOrigin',
})
export class FilterbyOriginPipe implements PipeTransform {
  transform(value: ICharacter[], args: IFilterOption[]): ICharacter[] {
    if (!args.length) {
      return value;
    }
    let filteredValue = [];
    args.forEach((arg) => {
      if (!arg.other) {
        filteredValue.push(
          ...value.filter(
            (val) => val.origin.name.toLowerCase() === arg.name.toLowerCase()
          )
        );
      } else {
        filteredValue.push(
          ...value.filter(
            (val) =>
              val.origin.name.toLowerCase() !==
                Filters.filterNames.origins.unknown.toLowerCase() &&
              val.origin.name.toLowerCase() !==
                Filters.filterNames.origins.postApocalypticEarth.toLowerCase() &&
              val.origin.name.toLowerCase() !==
                Filters.filterNames.origins.nuptia.toLowerCase()
          )
        );
      }
    });
    return filteredValue;
  }
}
