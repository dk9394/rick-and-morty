import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

import { IFilterOption } from '../shared/models/interfaces';
import { Filters } from '../shared/filter-options';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  speciesFilters: IFilterOption[] = Filters.filterOptions.species;
  genderFilters: IFilterOption[] = Filters.filterOptions.genders;
  originFilters: IFilterOption[] = Filters.filterOptions.origins;

  selectedSpeciesFilters$ = new Subject<IFilterOption[]>();
  selectedGenderFilters$ = new Subject<IFilterOption[]>();
  selectedOriginFilters$ = new Subject<IFilterOption[]>();

  anyFilterChecked = new BehaviorSubject<boolean>(false);
  private checkedFiltersCount = { species: 0, genders: 0, origins: 0 };

  editFilters(filter: IFilterOption) {
    if (filter.type === Filters.filterTypes.species) {
      const checkedFilters = this.speciesFilters.filter(
        (option) => option.checked
      );
      this.checkedFiltersCount.species = checkedFilters.length;
      this.selectedSpeciesFilters$.next(checkedFilters);
    }
    if (filter.type === Filters.filterTypes.gender) {
      const checkedFilters = this.genderFilters.filter(
        (option) => option.checked
      );
      this.checkedFiltersCount.genders = checkedFilters.length;
      this.selectedGenderFilters$.next(checkedFilters);
    }
    if (filter.type === Filters.filterTypes.origin) {
      const checkedFilters = this.originFilters.filter(
        (option) => option.checked
      );
      this.checkedFiltersCount.origins = checkedFilters.length;
      this.selectedOriginFilters$.next(checkedFilters);
    }
    if (
      this.checkedFiltersCount.species > 0 ||
      this.checkedFiltersCount.genders > 0 ||
      this.checkedFiltersCount.origins > 0
    ) {
      this.anyFilterChecked.next(true);
    } else {
      this.anyFilterChecked.next(false);
    }
  }
}
