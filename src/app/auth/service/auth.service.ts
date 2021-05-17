import { Injectable } from '@angular/core';
import {User} from '../../core/models/user';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  login(user: User): void{
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  logout(): void{
    localStorage.removeItem('ACCESS_TOKEN');
    window.location.reload();
  }

}
