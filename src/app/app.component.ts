import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  get isSignedIn() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  getName() {
    return localStorage.getItem('name');
  }
}
