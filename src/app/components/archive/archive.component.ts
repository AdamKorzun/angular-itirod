import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteStorageService } from 'src/app/services/note-storage.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(public noteStorage: NoteStorageService) { }

  ngOnInit(): void {
  }

  archived(notes: Note[]){
    return notes.filter(function(n) {return n.archived;});

  }

}
