import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: ':id', component: CharacterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
