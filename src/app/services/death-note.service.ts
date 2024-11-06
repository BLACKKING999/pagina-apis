// /services/death-note.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DeathNoteCharacter {
  _id: string;
  name: string;
  alias: string;
  description: string;
  deathNoteOwner: boolean;
  shinigami: boolean;
  intelligence: number;
  image: string;
  abilities: string[];
  status: string;
  relationships: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DeathNoteService {
  private apiUrl = 'http://localhost:4000/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<DeathNoteCharacter[]> {
    return this.http.get<DeathNoteCharacter[]>(this.apiUrl);
  }

  getCharacterById(id: string): Observable<DeathNoteCharacter> {
    return this.http.get<DeathNoteCharacter>(`${this.apiUrl}/${id}`);
  }

  createCharacter(character: DeathNoteCharacter): Observable<DeathNoteCharacter> {
    return this.http.post<DeathNoteCharacter>(this.apiUrl, character);
  }

  updateCharacter(id: string, character: DeathNoteCharacter): Observable<DeathNoteCharacter> {
    return this.http.put<DeathNoteCharacter>(`${this.apiUrl}/${id}`, character);
  }

  deleteCharacter(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}