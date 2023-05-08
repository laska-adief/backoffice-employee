import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorLogin = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    if (this.username !== 'admin' || this.password !== 'admin') {
      this.errorLogin = true;
    } else {
      this.errorLogin = false;
      this.authService.setTokenLogin();
      this.router.navigate(['/employee']);
    }
  }
}
