import { Component, OnInit } from '@angular/core';

import { FilterService } from 'src/app/filters/filter.service';
import { IFilterOption } from '../../models/interfaces';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss'],
})
export class FilterTagsComponent implements OnInit {
  speciesFilters: IFilterOption[] = [];
  genderFilters: IFilterOption[] = [];
  originFilters: IFilterOption[] = [];
  filterSelected: boolean = false;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.speciesFilters = this.filterService.speciesFilters;
    this.genderFilters = this.filterService.genderFilters;
    this.originFilters = this.filterService.originFilters;
    this.filterService.anyFilterChecked.subscribe((status) => {
      this.filterSelected = status;
    });
  }

  removeTag(tag: IFilterOption) {
    tag.checked = false;
    this.filterService.editFilters(tag);
  }
}
