import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  needsLogin = false;

  constructor() {
    const nav = this.router.getCurrentNavigation();
    this.needsLogin = nav?.extras.state?.['needsLogin'];
  }
}
