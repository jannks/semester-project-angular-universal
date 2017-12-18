import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CommentMessage } from '../../models/comment-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() commentMessage: CommentMessage;
  userEmail: string;
  messageContent: string;
  timeStamp: string;
  isOwnMessage: boolean;
  ownEmail: string;

  constructor(private authService: AuthenticationService) {
    authService.authUser().subscribe(user => {
      this.ownEmail = user.email;
      this.isOwnMessage = this.ownEmail === this.userEmail;
    });
  }

  ngOnInit(chatMessage = this.commentMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
  }
}