import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-edit-note-dialog',
  templateUrl: './edit-note-dialog.component.html',
  styleUrls: ['./edit-note-dialog.component.css']
})
export class EditNoteDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public note: Note,
    public dialogRef: MatDialogRef<EditNoteDialogComponent>,
    public fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      title: [note.title, Validators.required],
      text: [note.text, Validators.required]
    });
  }

  ngOnInit(): void {
   
  }
  submitForm() {
    let formValues = this.form.value;
    this.note.title =  formValues.title;
    this.note.text =  formValues.text;

    this.dialogRef.close({
      note: this.note
    });
  }

}
