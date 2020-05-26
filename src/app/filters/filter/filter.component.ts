import { Component, OnInit, Input } from '@angular/core';

import { FilterService } from 'src/app/filters/filter.service';
import { IFilterOption } from 'src/app/shared/models/interfaces';
import { Filters } from 'src/app/shared/filter-options';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() title: string = '';
  @Input() type: string;
  options: IFilterOption[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    if (this.type === Filters.filterTypes.species) {
      this.options = this.filterService.speciesFilters;
    }
    if (this.type === Filters.filterTypes.gender) {
      this.options = this.filterService.genderFilters;
    }
    if (this.type === Filters.filterTypes.origin) {
      this.options = this.filterService.originFilters;
    }
  }

  onToggleFilter(filter: IFilterOption): void {
    filter.checked = !filter.checked;
    this.filterService.editFilters(filter);
  }
}
