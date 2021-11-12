import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    PipesModule,
    FormsModule
  ]
})
export class EpisodeModule { }
