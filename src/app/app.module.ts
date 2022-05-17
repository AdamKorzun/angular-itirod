import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { NoteComponent } from './components/note/note.component';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AddNoteDialogComponent } from './components/add-note-dialog/add-note-dialog.component';
import { environment } from 'src/environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditNoteDialogComponent } from './components/edit-note-dialog/edit-note-dialog.component';
import { NotesLayoutComponent } from './components/notes-layout/notes-layout.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ToIterablePipe } from './pipes/to-iterable.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
@NgModule({
  entryComponents: [AddNoteDialogComponent],
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NoteComponent,
    IndexComponent,
    HomeComponent,
    HeaderComponent,
    AddNoteDialogComponent,
    EditNoteDialogComponent,
    NotesLayoutComponent,
    ArchiveComponent,
    ToIterablePipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),

    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
