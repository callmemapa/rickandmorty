import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Episode } from 'src/app/core/models/episode.model';
import { EpisodeService } from 'src/app/core/services/episode.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit {

  episode: Episode = {
    id: 0,
    name: '',
    air_date: '',
    characters: []
  };
  characters: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchEpisode(id);
    });
  }

  fetchEpisode(id: number) {
    this.episodeService.getEpisode(id)
    .subscribe((data: any) => {
      this.episode = data;
      this.getCharacters();
    })
  }

  /** Se guarda el último trozo de la URL, que vendría siendo el id del personaje
   * para que la consulta sea más sencilla al momento de redirigir a ese episodio en específico
  */
  getCharacters() {
    for (var i = 0; i < this.episode.characters.length; i++) {
      this.characters.push(this.episode.characters[i].substring(this.episode.characters[i].lastIndexOf('/') + 1));
    }
  }

}
