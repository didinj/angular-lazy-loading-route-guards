import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = signal(false);
  private _role = signal<'user' | 'admin'>('user');

  readonly isLoggedIn = computed(() => this._isLoggedIn());
  readonly role = computed(() => this._role());

  loginAs(role: 'user' | 'admin') {
    this._isLoggedIn.set(true);
    this._role.set(role);
  }

  logout() {
    this._isLoggedIn.set(false);
    this._role.set('user');
  }

  getUserRole(): 'user' | 'admin' {
    return this._role();
  }
}
