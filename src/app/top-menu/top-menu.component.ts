import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login();
  }

  public logOut() {
    this.authService.logOut();
  }
}
