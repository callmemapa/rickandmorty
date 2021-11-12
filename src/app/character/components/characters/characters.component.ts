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
  episodes: any[] = [];
  filterCharacter = '';

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.characterService.getCharacters()
    .subscribe((data: any) => {
      this.characters = data.results;
      this.getEpisodes();
      this.updateEpisodes();
    })
  }

  getEpisodes() {
    for (var i = 0; i < this.characters.length; i++) {
      this.episodes.push(this.characters[i].episode);
    }
  }

  updateEpisodes() {
    for (var i = 0; i < this.episodes.length; i++) {
      for (var j = 0; j < this.episodes[i].length; j++) {
        this.episodes[i][j] = this.episodes[i][j].substring(this.episodes[i][j].lastIndexOf('/') + 1);
      }
    }
  }

}
