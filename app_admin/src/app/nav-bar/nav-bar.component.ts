import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from'../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() { }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  private onLogout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('list-trips');
    return;
  }
}