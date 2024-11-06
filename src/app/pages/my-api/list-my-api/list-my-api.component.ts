// /pages/my-api/list-my-api/list-my-api.component.ts
import { Component, OnInit } from '@angular/core';
import { DeathNoteCharacter, DeathNoteService } from '../../../services/death-note.service';

@Component({
  selector: 'app-list-my-api',
  templateUrl: './list-my-api.component.html',
  styleUrls: ['./list-my-api.component.css']
})
export class ListMyApiComponent implements OnInit {
  characters: DeathNoteCharacter[] = [];

  constructor(private deathNoteService: DeathNoteService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.deathNoteService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  deleteCharacter(id: string) {
    this.deathNoteService.deleteCharacter(id).subscribe(() => {
      this.loadCharacters();
    });
  }
}