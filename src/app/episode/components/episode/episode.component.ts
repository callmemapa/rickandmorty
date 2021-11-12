import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/core/models/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input() episode: Episode = {
    id: 0,
    name: '',
    air_date: '',
    characters: []
  };
  @Input() characters = [];

  constructor() { }

  ngOnInit(): void {
  }

}
