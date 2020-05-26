import { Component, OnInit } from '@angular/core';

import { Filters } from '../shared/filter-options';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  species = Filters.filterTypes.species;
  gender = Filters.filterTypes.gender;
  origin = Filters.filterTypes.origin;

  constructor() {}

  ngOnInit() {}
}
