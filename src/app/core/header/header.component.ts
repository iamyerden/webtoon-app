import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../../auth/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  isLoggedInCheck = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedInCheck = this.authService.isLoggedIn();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  login(): void {
    this.router.navigateByUrl('auth/login');
  }

  logout(): void{
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
