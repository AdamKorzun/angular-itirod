import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AddNoteDialogComponent } from '../add-note-dialog/add-note-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uid: string | undefined;
  constructor(private router: Router, private fbService: FirebaseService) { }
  history: Note[] = [];
  ngOnInit(): void {
    this.uid = sessionStorage.getItem('uid')?.toString();
    if (!this.uid) {
      this.router.navigateByUrl('');
    }
    
    this.fbService.getAllNotes(this.uid!).then(value =>{
      let snap = value.val();
      for (let id in snap) {
        this.history.push(new Note(parseInt(id), snap[id].title, snap[id].text,  snap[id].color));
      } 

    });
  }
  deleteNoteHandler(id: number){
    if (this.uid){
      console.log('test')

      this.fbService.deleteNote(this.uid, id);
    }
  }
  editNoteHandler(id: number){
    if (this.uid){
      ;
    }
  }

  openDialog(): void {
    // let dialogRef = this.dialog.open(AddNoteDialogComponent);
  
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result)
    // });
  }

}
