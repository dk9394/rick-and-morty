import { Pipe, PipeTransform } from '@angular/core';

import { ICharacter, IFilterOption } from '../models/interfaces';
import { Filters } from '../filter-options';

@Pipe({
  name: 'filterbySpecies',
})
export class FilterbySpeciesPipe implements PipeTransform {
  transform(value: ICharacter[], args: IFilterOption[]): ICharacter[] {
    if (!args.length) {
      return value;
    }
    let filteredValue = [];
    args.forEach((arg) => {
      if (!arg.other) {
        filteredValue.push(
          ...value.filter(
            (val) => val.species.toLowerCase() === arg.name.toLowerCase()
          )
        );
      } else {
        filteredValue.push(
          ...value.filter(
            (val) =>
              val.species.toLowerCase() !==
                Filters.filterNames.species.human.toLowerCase() &&
              val.species.toLowerCase() !==
                Filters.filterNames.species.mytholog.toLowerCase()
          )
        );
      }
    });
    return filteredValue;
  }
}
