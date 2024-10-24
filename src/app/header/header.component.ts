import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  

  toggle: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  get login(){
    return this.authService.user;
  }

  options(){
    this.toggle = !this.toggle;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
    this.toggle = false;
  }
}
