import { GalleryImage } from './../models/galleryImage.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
import { AuthenticationService } from './authentication.service';
import * as firebase from 'firebase';

import { AngularFireList } from 'angularfire2/database/interfaces';
import { CommentMessage } from '../models/comment-message.model'

@Injectable()
export class CommentService {
  user: firebase.User;
  commentMessages: AngularFireList<CommentMessage>;
  commentMessage: CommentMessage;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
    ) {
        this.afAuth.authState.subscribe(auth => {
          if (auth !== undefined && auth !== null) {
            this.user = auth;
          }
      
          });
        
    }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = '/users';
    return this.db.list(path);
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.commentMessages = this.db.list('messages');
    this.commentMessages.push({
        message: msg,
        timeSent: timestamp,
        email: email
    })
  }

  getMessages(): AngularFireList<CommentMessage[]> {
    // query to create our message feed binding
    return this.db.list('messages', ref => 
        ref.limitToLast(25).orderByKey())
    }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}