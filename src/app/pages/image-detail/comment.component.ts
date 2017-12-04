import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component ({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
    message: string;

    constructor(private comment: CommentService) {
    
    }

    ngOnInit() {}

    send() {
        this.comment.sendMessage(this.message);
    }

    handSubmit(event) {
        if (event.keyCode == 13) {
            this.send();
        }
    }
}

