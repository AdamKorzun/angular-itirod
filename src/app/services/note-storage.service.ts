import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class NoteStorageService {

  constructor(private fbService: FirebaseService) {
    this.fbService.getAllNotes().then(value =>{
      let snap = value.val();
      for (let id in snap) {
        this.notes.push(new Note(parseInt(id), snap[id].title, snap[id].text,  snap[id].color));
      } 

    });
   }
   notes: Note[] = []
  

  get getId() {
      let id = 0;
      for (let n of this.notes){
          if (n.id > id) {
              id = n.id;
          }
      }
      return id + 1;
  }

  add(note: Note) {
      this.notes.push(note);
      this.fbService.addNote(note);
  }

  deleteNote(noteId: number){
      this.notes = this.notes.filter(function(value, index, arr){
          return value.id !== noteId;
      });
      this.fbService.deleteNote(noteId);
  }

  getNote(noteId: number) {
      for (let i = 0; i < this.notes.length; i++) {
          if (this.notes[i].id === noteId){
              return this.notes[i];
          }
      }
      throw console.error();
  }

  updateNote(note: Note){
      for (let i = 0; i < this.notes.length; i++) {
        if (this.notes[i].id === note.id){
          this.notes[i].title = note.title;
          this.notes[i].text = note.text;
          break;
        }
      }
      this.fbService.updateNote(note);
  }
}
