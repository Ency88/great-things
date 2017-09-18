import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  public authUser;

  constructor(private authService: AuthenticationService) {
    this.authService.user
      .subscribe(user => this.authUser = user);
  }

  ngOnInit() {
  }

  public login() {
    this.authService.login();
  }

  public logOut() {
    this.authService.logOut();
  }
}
