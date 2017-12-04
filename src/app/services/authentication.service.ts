import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password); //sign in Firebase with user object
  }

  logout() {
    return this.afAuth.auth.signOut(); // sign out Firebase (Firebase function)
  }

  authUser() { 
    return this.user;
  }

  getUser() { // user id for iamges (still testing)
    return this.afAuth.auth.currentUser.uid;
  }

  getEmail() {
    return this.afAuth.auth.currentUser.email;
  }
}
