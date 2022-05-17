import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AddNoteDialogComponent } from '../add-note-dialog/add-note-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Colors } from 'src/app/models/colors';
import { NoteStorageService } from 'src/app/services/note-storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uid: string | undefined;
  constructor(private router: Router, private dialog: MatDialog, public noteStorage: NoteStorageService) { }
  ngOnInit(): void {
    this.uid = sessionStorage.getItem('uid')?.toString();
    if (!this.uid) {
      this.router.navigateByUrl('');
    }
  }
  
 

  openDialog(): void {
    let dialogRef = this.dialog.open(AddNoteDialogComponent, {
      width: '460px',
      height: '540px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == null) {
        return;
      }
      let form = result['form'];
      if (form) {
        let note = new Note(this.noteStorage.getId, form.title, form.text, Colors.randomColor)
        this.noteStorage.add(note);
      }      
    })
  }
 

}
