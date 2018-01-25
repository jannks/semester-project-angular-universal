import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { CommentMessage } from '../../models/comment-message.model'
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

@Component ({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit, OnChanges {
    feed: Observable<CommentMessage[]>;

    constructor(private comment: CommentService) {
    
    }

    ngOnInit() {
        this.feed = this.comment.getMessages().valueChanges();
    }

    ngOnChanges() {
        this.feed = this.comment.getMessages().valueChanges();
    }

}