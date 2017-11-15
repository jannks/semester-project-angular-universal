import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

    user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    return this.user.map((auth) => { // catch authentication status from Firebase (boolean)
      if (!auth) { // if false: back to login
        this.router.navigateByUrl('/login');
        return false;
      }
      return true;
    }).take(1); 
  }

}
