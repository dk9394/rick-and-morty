import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { ICharacter } from '../models/interfaces';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: ICharacter[], arg: string): ICharacter[] {
    if (!isNullOrUndefined(value) && !isNullOrUndefined(arg)) {
      switch (arg) {
        case 'asc':
          return value.sort((a, b) => a.id - b.id);
        case 'desc':
          return value.sort((a, b) => b.id - a.id);
        default:
          return value;
      }
    }
    return value;
  }
}
