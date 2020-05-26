import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { ICharacter } from '../models/interfaces';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: ICharacter[], arg: string): ICharacter[] {
    if (!isNullOrUndefined(value) && !isNullOrUndefined(arg)) {
      const result = value.filter(
        (val) => val.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1
      );
      return result;
    }
    return value;
  }
}
