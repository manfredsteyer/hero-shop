import { Component, inject } from '@angular/core';
import { NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  router = inject(Router);
  message = '';

  constructor() {
    const nav = this.router.getCurrentNavigation();
    const navError = nav?.extras.state?.['error'] as NavigationError;
    this.message =  'This url does not exist: ' + navError.url;
  }

}
