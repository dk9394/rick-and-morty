import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from 'src/app/api.service';
import { ICharactersResponse, ICharacter } from '../shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CharService {
  characters: ICharacter[] = [];
  constructor(private apiService: ApiService) {}

  getCharacters(pageCount: number): Observable<ICharactersResponse> {
    return this.apiService.getAll(pageCount).pipe(
      tap((chars) => {
        this.characters = chars;
      })
    );
  }
}
