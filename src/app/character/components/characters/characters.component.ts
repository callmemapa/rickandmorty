import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  episodes: number[] = [];

  constructor(
    private characterService: CharacterService
  ) {
    this.fetchCharacters();
  }

  ngOnInit(): void {
  }

  fetchCharacters() {
    this.characterService.getCharacters()
    .subscribe((data: any) => {
      this.characters = data.results;
    })
  }

}
