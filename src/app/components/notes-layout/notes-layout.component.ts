import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteStorageService } from 'src/app/services/note-storage.service';

@Component({
  selector: 'app-notes-layout',
  templateUrl: './notes-layout.component.html',
  styleUrls: ['./notes-layout.component.css']
})
export class NotesLayoutComponent implements OnInit {
  @Input()
  notes: Note[] = [];
  columnNumber: number = 2;

  range(n: number){
    let rangeArray = Array.from(Array(n).keys());
    for (let i= 0; i < rangeArray.length;i++){
      rangeArray[i] += 1;
    }
    return rangeArray;
  }

  constructor(public noteStorage: NoteStorageService) { }

  ngOnInit(): void {
    let colNum = parseInt((window.innerWidth / 350).toFixed());
    if (colNum > 0){
      this.columnNumber = parseInt((window.innerWidth / 350).toFixed());
    } 
    else {
      this.columnNumber = 1;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let colNum = parseInt((window.innerWidth / 350).toFixed());
    if (colNum > 0){
      this.columnNumber = parseInt((window.innerWidth / 350).toFixed());
    } 
    else {
      this.columnNumber = 1;
    }
  }
}
