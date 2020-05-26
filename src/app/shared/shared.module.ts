import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './components/search/search.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { FilterTagsComponent } from './components/filter-tags/filter-tags.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterbySpeciesPipe } from './pipes/filterby-species.pipe';
import { FilterbyGenderPipe } from './pipes/filterby-gender.pipe';
import { FilterbyOriginPipe } from './pipes/filterby-origin.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    SortByComponent,
    FilterTagsComponent,
    SearchPipe,
    SortPipe,
    FilterbySpeciesPipe,
    FilterbyGenderPipe,
    FilterbyOriginPipe,
  ],
  imports: [CommonModule],
  exports: [
    FilterTagsComponent,
    SearchPipe,
    SortPipe,
    FilterbySpeciesPipe,
    FilterbyGenderPipe,
    FilterbyOriginPipe,
  ],
})
export class SharedModule {}
