import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';
import { CommentMessage } from '../models/comment-message.model';
import { ImageDetailComponent } from '../pages/image-detail/image-detail.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';

@Injectable()
export class CommentService {
    user: AuthenticationService;
    url: ImageDetailComponent;
    itemsRef: AngularFireList<CommentMessage>;
    items: Observable<CommentMessage[]>;
    commentMessage: CommentMessage; 

    constructor(
        private db: AngularFireDatabase
    ) {
        
    }

    sendMessage(msg: string) {
        const timestamp = this.getTimeStamp();
        const email = this.user.getEmail();
        this.items = this.getMessages();
        this.itemsRef.push({
            message: msg,
            timeSent: timestamp,
            email: email
        })
    }

    getMessages(): Observable<CommentMessage[]> {

        return this.db.list('messages').valueChanges();
    }

    getTimeStamp() {
        const now = new Date();
        const date = now.getUTCFullYear() + '/' +
                     (now.getUTCMonth() + 1)+ '/' +
                     now.getUTCDate();
        const time = now.getUTCHours() + ':' +
                     now.getUTCMinutes() + ':' +
                     now.getUTCSeconds();            
        return (date + ' '+ time);             
    }
}