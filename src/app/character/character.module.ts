import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterRoutingModule } from './character-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterComponent } from './components/character/character.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule,
    RouterModule
  ]
})
export class CharacterModule { }
