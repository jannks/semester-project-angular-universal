
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { GalleryImage } from '../models/galleryImage.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Upload } from '../models/upload.model';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import * as  firebase from 'firebase';


@Injectable()
export class UploadService {

  private basePath = '/uploads'; // upload path on Firebase
  private uploads: AngularFireList<GalleryImage[]>; // list with images for upload
  private user: string; // user id

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase, private authService: AuthenticationService) {
    this.user = authService.getUser();
   }

  uploadFile(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      // three observers
      // 1.) state_changed observer
      (snapshot) => {
        // upload in progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        console.log(upload.progress);
      },
      // 2.) error observer
      (error) => {
        // upload failed
        console.log(error);
      },
      // 3.) success observer
      (): any => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        upload.uid = this.user;
        this.saveFileData(upload);
      }
    );
  } // final save on Firebase
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
    console.log('File saved!: ' + upload.url);
  }
}
