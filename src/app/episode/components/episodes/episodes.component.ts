import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/core/models/episode.model';
import { EpisodeService } from 'src/app/core/services/episode.service';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: Episode[] = [];
  characters: any[] = [];
  filterEpisode = '';

  constructor(
    private episodeService: EpisodeService,
    private characterService: CharacterService
  ) {
    this.fetchEpisodes();
  }

  ngOnInit(): void {
  }

  fetchEpisodes() {
    this.episodeService.getEpisodes()
    .subscribe((data: any) => {
      this.episodes = data.results;
      this.getCharacters();
      this.updateCharacters();
    })
  }

  getCharacters() {
    for (var i = 0; i < this.episodes.length; i++) {
      this.characters.push(this.episodes[i].characters);
    }
  }

  updateCharacters() {
    for (var i = 0; i < this.characters.length; i++) {
      for (var j = 0; j < this.characters[i].length; j++) {
        this.characters[i][j] = this.characters[i][j].substring(this.characters[i][j].lastIndexOf('/') + 1);
      }
    }
  }

}
