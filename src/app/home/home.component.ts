import {Component, OnInit} from '@angular/core';
import {GreatThingModel} from '../models/greatThingModel';
import {Observable} from 'rxjs/Observable';
import {GreatThingsFirebaseService} from '../services/great-things-firebase.service';
import {AuthenticationService} from '../services/authentication.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public greatThings: Observable<GreatThingModel[]>;
  public authUser: firebase.User;

  constructor(private firebaseService: GreatThingsFirebaseService,
              private authService: AuthenticationService) {
    this.authService.user
      .subscribe(user => this.authUser = user);
  }

  ngOnInit() {
    this.greatThings = this.firebaseService.getAllGreatThings();
  }

}
