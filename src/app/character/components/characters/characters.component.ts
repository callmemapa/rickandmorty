import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(
    private characterService: CharacterService
  ) {
    this.fetchCharacters();
  }

  ngOnInit(): void {
  }

  fetchCharacters() {
    this.characterService.getCharacters()
    .subscribe(data => {
      console.log(data);
    })
  }

}
