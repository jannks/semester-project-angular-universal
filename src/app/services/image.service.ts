import { GalleryImage } from './../models/galleryImage.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(): Observable<GalleryImage[]> { // return a map with GalleryImage objects: map key = Image key 
                                            // value = object
    return this.db.list('uploads').snapshotChanges().map(actions => {
      return actions.map(action => {
        const $key = action.payload.key;
        const data = { $key, ...action.payload.val() };
        return data;
      });
    });
  }

  getUserImages(): Observable<GalleryImage[]> { // testing
    var itemsRef: AngularFireList<any>;
    itemsRef = this.db.list('uploads');


    return itemsRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const $key = action.payload.key;
        const data = { $key, ...action.payload.val() };
        return data;
      });
    });
  }

  getImage(key: string) { // return single image for image-detail
    return firebase.database().ref('uploads/' + key).once('value')
    .then((snap) => snap.val());
  }

}


