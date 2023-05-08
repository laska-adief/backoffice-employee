import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setTokenLogin() {
    const token = Date.now().toString();
    localStorage.setItem('token', token);
  }

  unsetTokenLogin() {
    localStorage.removeItem('token');
  }

  isLogin() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
}
