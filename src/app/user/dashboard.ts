import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private auth: AuthService, private router: Router) { }

  loginAsUser() {
    this.auth.loginAs('user');
    this.router.navigate(['/user']);
  }

  loginAsAdmin() {
    this.auth.loginAs('admin');
    this.router.navigate(['/admin']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/user']);
  }
}
