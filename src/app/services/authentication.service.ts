import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  loggedUserSubject$: BehaviorSubject<Observable<firebase.User | any>> = new BehaviorSubject(Observable.of({}));

  constructor(private firebaseAuth: AngularFireAuth) { }

  login(): Observable<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.fromFirebaseAuthPromise(this.firebaseAuth.auth.signInWithPopup(provider));
  }

  fromFirebaseAuthPromise(promise): Observable<any> {
    const subject = new Subject<any>();

    promise
      .then(res => {
          this.loggedUserSubject$.next(this.firebaseAuth.authState);
          console.log(this.firebaseAuth.authState);
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
    this.firebaseAuth.auth.signOut()
      .then(() => this.loggedUserSubject$.next(Observable.of({})));
  }
}
