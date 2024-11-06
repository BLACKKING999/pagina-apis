// /pages/my-api/create-my-api/create-my-api.component.ts
import { Component } from '@angular/core';
import { DeathNoteCharacter, DeathNoteService } from '../../../services/death-note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-my-api',
  templateUrl: './create-my-api.component.html',
  styleUrls: ['./create-my-api.component.css']
})
export class CreateMyApiComponent {
  newCharacter: DeathNoteCharacter = {
    _id: '',
    name: '',
    alias: '',
    description: '',
    deathNoteOwner: false,
    shinigami: false,
    intelligence: 0,
    image: '',
    abilities: [],
    status: '',
    relationships: []
  };

  constructor(private deathNoteService: DeathNoteService, private router: Router) {}

  createCharacter() {
    this.deathNoteService.createCharacter(this.newCharacter).subscribe(() => {
      this.router.navigate(['/my-api/list']);
    });
  }
}