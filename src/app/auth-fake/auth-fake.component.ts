import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-fake',
  templateUrl: './auth-fake.component.html',
  styleUrls: ['./auth-fake.component.css']
})
export class AuthFakeComponent {

  signIn() {
    localStorage.setItem('token', '123456789');
  }

  signOut() {
    localStorage.removeItem('token');
  }
}
