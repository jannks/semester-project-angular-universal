import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <app-navigation></app-navigation>
        <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {

}
