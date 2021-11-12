import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/core/models/episode.model';
import { EpisodeService } from 'src/app/core/services/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: Episode[] = [];
  filterEpisode = '';

  constructor(
    private episodeService: EpisodeService
  ) { }

  ngOnInit(): void {
    this.fetchEpisodes();
  }

  fetchEpisodes() {
    this.episodeService.getEpisodes()
    .subscribe((data: any) => {
      this.episodes = data.results;
      console.log(this.episodes);
    })
  }

}
