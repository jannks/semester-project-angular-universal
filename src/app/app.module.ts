import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment} from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NavigationComponent } from './elements/navigation/navigation.component';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { UploadComponent } from './pages/upload/upload.component';
import { UserGalleryComponent } from './pages/user-gallery/user-gallery.component';


import { AuthenticationGuardService } from './services/authentication-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';

import { appRoutes } from '../routes';

import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavigationComponent,
    ImageDetailComponent,
    LoginComponent,
    UploadComponent,
    UserGalleryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase), //Initialize Firebase 
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthenticationGuardService,
    AuthenticationService,
    ImageService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
