import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  private user;
  @Input() isLoggedIn: boolean;

  constructor(private router: Router) {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }
}
