import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';
import { PublicComponent } from "./public/public.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user;
  public isLoggedIn: Boolean;
  private displayName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
      this.authService.user.subscribe(user => {
        if (user == null) {
          this.isLoggedIn = false;
          // this.router.navigate(['public']);
        } else {
          this.isLoggedIn = true;
          this.displayName = user.displayName;
        }
      });
    }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    console.log("in logout");
  }
}
