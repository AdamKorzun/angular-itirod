import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms'
@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.css']
})
export class AddNoteDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddNoteDialogComponent>,
    public fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    });
  }
  
  
  ngOnInit(): void {
  }
  submitForm() {
    this.dialogRef.close({
      form: this.form.value
    });
  }
 
}
