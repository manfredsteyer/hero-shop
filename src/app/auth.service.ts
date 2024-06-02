import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName = '';

  constructor() { }
  
  login(userName: string): void {
    this.userName = userName;
  }

  logout(): void {
    this.userName = '';
  }

  isAuth() {
    return this.userName !== '';
  }

}
