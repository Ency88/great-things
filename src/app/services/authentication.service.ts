import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = this.firebaseAuth.authState;
  }

  login(): Observable<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.fromFirebaseAuthPromise(this.firebaseAuth.auth.signInWithPopup(provider));
  }

  fromFirebaseAuthPromise(promise): Observable<any> {
    const subject = new Subject<any>();

    promise
      .then(res => {
          subject.next(res);
          subject.complete();
        },
        error => {
          console.log('Error was occurred during authentication');
          console.log(error);
          subject.error(error);
          subject.complete();
        });
    return subject.asObservable();
  }

  logOut() {
    this.firebaseAuth.auth.signOut();
  }
}
