import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {
  ICharacter,
  ICharactersResponse,
  IResponseInfo,
  IFilterOption,
} from '../shared/models/interfaces';
import { isNullOrUndefined } from 'util';
import { CharService } from './char.service';
import { FilterService } from '../filters/filter.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: ICharacter[] = [];
  info: IResponseInfo;
  searchBy: string;
  sortBy: string = 'asc';
  filterBySpecies: IFilterOption[] = [];
  filterByGender: IFilterOption[] = [];
  filterByOrigin: IFilterOption[] = [];
  pageCount: number = 1;

  private sub: Subscription;

  constructor(
    private charService: CharService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.fetchCharacters(this.pageCount);
    this.filterService.selectedSpeciesFilters$.subscribe((filters) => {
      this.filterBySpecies = filters;
    });
    this.filterService.selectedGenderFilters$.subscribe((filters) => {
      this.filterByGender = filters;
    });
    this.filterService.selectedOriginFilters$.subscribe((filters) => {
      this.filterByOrigin = filters;
    });
  }

  onNext() {
    this.pageCount = ++this.pageCount;
    this.fetchCharacters(this.pageCount);
  }

  onPrev() {
    this.pageCount = --this.pageCount;
    this.fetchCharacters(this.pageCount);
  }

  private fetchCharacters(page: number) {
    this.sub = this.charService
      .getCharacters(page)
      .subscribe((res: ICharactersResponse) => {
        this.characters = res.results;
        this.info = res.info;
        console.log(this.characters);
        console.log(this.info);
      });
  }

  ngOnDestroy() {
    if (!isNullOrUndefined(this.sub)) {
      this.sub.unsubscribe();
    }
  }
}
