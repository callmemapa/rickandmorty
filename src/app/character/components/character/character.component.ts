import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character = {
    id: 0,
    name: '',
    species: '',
    status: '',
    gender: '',
    image: '',
    episode: []
  };
  @Input() episodes = [];

  constructor() { }

  ngOnInit(): void {
  }

}
