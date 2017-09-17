import {Component, OnInit} from '@angular/core';
import {GreatThingModel} from '../models/greatThingModel';
import {Observable} from 'rxjs/Observable';
import {GreatThingsFirebaseService} from '../services/great-things-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public greatThings: Observable<GreatThingModel[]>;

  constructor(private firebaseService: GreatThingsFirebaseService) {
  }

  ngOnInit() {
    this.greatThings = this.firebaseService.getAllGreatThings();
  }

}
