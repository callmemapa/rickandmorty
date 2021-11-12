import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Character } from './../../../core/models/character.model';
import { CharacterService } from './../../../core/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character = {
    id: 0,
    name: '',
    species: '',
    status: '',
    gender: '',
    image: '',
    episode: []
  }
  episodes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchCharacter(id);
    });
  }

  fetchCharacter(id: number) {
    this.characterService.getCharacter(id)
      .subscribe((data: any) => {
        this.character = data;
        this.getEpisodes();
      })
  }

  /** Se toma el último path de la URL la lista de episodios del personaje, ya que contiene el ID del episodio
   * luego con este ID se puede hacer la consulta individual
   */
  getEpisodes() {
    for (var i = 0; i < this.character.episode.length; i++) {
      this.episodes.push(this.character.episode[i].substring(this.character.episode[i].lastIndexOf('/') + 1));
    }
  }

}
