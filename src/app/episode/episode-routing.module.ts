import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

const routes: Routes = [
  { path: '', component: EpisodesComponent },
  { path: ':id', component: EpisodeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
