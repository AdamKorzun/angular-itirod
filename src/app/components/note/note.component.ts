import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Colors } from 'src/app/models/colors';
import { Note } from 'src/app/models/note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NoteStorageService } from 'src/app/services/note-storage.service';
import { EditNoteDialogComponent } from '../edit-note-dialog/edit-note-dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note: Note | undefined;
  @Output() noteDeleted: EventEmitter<number> = new EventEmitter();
  constructor(private dialog: MatDialog, public noteStorage: NoteStorageService, private fbService: FirebaseService) {
    
   }
  deleteNoteEvent(){
    this.noteDeleted.emit(this.note!.id);
  }
  ngOnInit(): void {
  }
  openDialog(): void {
    console.log()
    let dialogRef = this.dialog.open(EditNoteDialogComponent, {
      width: '460px',
      height: '540px',
      data: this.note
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == null){
        return
      } 
      this.note  = result['note'];
      if (this.note) {
        this.noteStorage.updateNote(this.note);
      }      
    })
  }
  editNoteHandler(id: number){
    ;
  }
}
