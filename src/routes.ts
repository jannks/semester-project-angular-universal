import { Routes } from '@angular/router';
import { UserGalleryComponent } from './app/pages/user-gallery/user-gallery.component';
import { FrontPageComponent } from './app/pages/front-page/front-page.component';
import { ImageDetailComponent } from './app/pages/image-detail/image-detail.component';
import { LoginComponent } from './app/pages/login/login.component';
import { UploadComponent } from './app/pages/upload/upload.component';
import { AuthenticationGuardService } from './app/services/authentication-guard.service';

export const appRoutes: Routes = [
    { path: 'usergallery', component: UserGalleryComponent, canActivate: [AuthenticationGuardService]},
    { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuardService]},
    { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuardService]},
    { path: '', component: FrontPageComponent},
    { path: 'login', component: LoginComponent}
];
