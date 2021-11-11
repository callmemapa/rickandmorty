import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../models/character.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {
    return this.http.get<Character[]>(`${environment.url_api}/character`);
  }

  getCharacter(id: number) {
    return this.http.get<Character>(`${environment.url_api}/character`);
  }

}
