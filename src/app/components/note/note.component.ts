import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note: Note | undefined;
  @Output() noteDeleted: EventEmitter<number> = new EventEmitter();
  constructor() {
    
   }
  deleteNoteEvent(){
    this.noteDeleted.emit(this.note!.id);
  }
  ngOnInit(): void {
  }

}
