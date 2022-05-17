import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Note } from '../models/note';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {}
  getUid() : string | null{
    return sessionStorage.getItem('uid');
  }

  usersRef: AngularFireObject<any> | undefined;
  deleteNote(noteId: number){
    let uid = this.getUid();
    if (uid){
      this.db.database.ref('notes/' + uid + '/' + noteId).remove();
    }
  }
  updateNote(note: Note){
    let uid = this.getUid();
    if (uid) {
      this.db.database.ref('notes/' + uid + '/' + note.id).update({
        'title' : note.title,
        'text' : note.text,
        'color' : note.color
      })
    }
  }
  getAllNotes(){
    let uid = this.getUid();
    if (uid){
      return  this.db.database.ref('notes/' + uid).get();
    }
    throw console.error();
    

  }
  addNote(note: Note){
    let uid = this.getUid();
    if (uid) {
      this.db.database.ref('notes/' + uid + '/' + String(note.id)).set({
        'title' : note.title,
        'text' : note.text,
        'color' : note.color
      });

      
    }
  }
  signIn(user: User) {
    this.afAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(value => {
        let uid =  value!['user']!['uid'];
        if (uid) {
          sessionStorage.setItem('uid', uid);
          this.router.navigateByUrl('/home');
        }
        
      }).catch(err => {
        console.log('Something went wrong: ', err.message);
      });

  }
  signUp(user: User){
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(value => {
        let uid =  value!['user']!['uid'];
        if (uid) {
          sessionStorage.setItem('uid', uid);
          this.router.navigateByUrl('/home');
        }
      }).catch(arr => {
        alert('Auth error');
      })
  }
}

