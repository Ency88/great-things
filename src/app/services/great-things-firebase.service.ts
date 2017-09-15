import { Injectable } from '@angular/core';
import {FirebaseApp} from 'angularfire2';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {GreatThingModel} from '../models/greatThingModel';
import {GreatThingUpload} from '../models/greatThingUpload';
import 'firebase/storage';
// import {Observable} from 'rxjs/Observable';

@Injectable()
export class GreatThingsFirebaseService {

  private basePath = '/greatThings';
  // public greatThings: FirebaseListObservable<GreatThingModel[]>;

  constructor(private firebaseDatabase: AngularFireDatabase,
              private firebase: FirebaseApp) {
  }

  // public getAllGreatThings(): Observable<GreatThingModel[]> {
  //   // return this.firebaseDatabase.list(`${this.basePath}/`)
  //   //   .map(GreatThingModel.fromJson);
  // }

  addNew(greatThing: GreatThingUpload) {
    const storage = this.firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef.child(`${this.basePath}/${greatThing.file.name}`).put(greatThing.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        console.log(`Transfered: ${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}`);
      },
      error => {
        console.error(error);
      },
      () => {
        const pictureUrl = uploadTask.snapshot.downloadURL;
        const newDatabaseItem = new GreatThingModel(
          greatThing.title,
          greatThing.subtitle,
          pictureUrl
        );
        this.updateDatabase(newDatabaseItem);
      });
    }

  private updateDatabase(greatThing: GreatThingModel) {
    // TODO: Implementation needed
    console.log('Update database');
    console.log(greatThing);
    this.firebaseDatabase.list(`${this.basePath}/`).push(greatThing);
  }
}
