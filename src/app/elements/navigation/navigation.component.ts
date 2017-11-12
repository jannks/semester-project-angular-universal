
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  title: 'Angular HFU Project';

  user: Observable<firebase.User>;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }


}
