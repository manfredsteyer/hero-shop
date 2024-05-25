import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RedirectToLoginState } from '../data/redirect-to-login-state';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  auth = inject(AuthService);

  state: RedirectToLoginState | undefined;

  constructor() {
    const nav = this.router.getCurrentNavigation();

    if (nav?.extras.state) {
      this.state = nav?.extras.state as RedirectToLoginState;
    }

  }

  logout() {
    this.auth.logout();
  }

  login() {
    this.auth.login('John');
    if (this.state?.afterLoginRedirect) {
      this.router.navigateByUrl(this.state?.afterLoginRedirect);
    }
  }

}
