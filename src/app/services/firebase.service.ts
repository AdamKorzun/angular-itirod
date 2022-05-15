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

  usersRef: AngularFireObject<any> | undefined;
  deleteNote(uid: string, noteId: number){
    console.log(noteId);
    this.db.database.ref('notes/' + uid + '/' + noteId).remove();
  }
  updateNote(uid: string, note: Note){
    ;
  }
  getAllNotes(uid: string){
    if (uid){
      return  this.db.database.ref('notes/' + uid).get();
    }
    throw console.error();
    

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
}
