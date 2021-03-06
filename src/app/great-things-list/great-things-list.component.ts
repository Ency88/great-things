import {Component, Input, OnInit} from '@angular/core';
import {GreatThingModel} from '../models/greatThingModel';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-great-things-list',
  templateUrl: './great-things-list.component.html',
  styleUrls: ['./great-things-list.component.css']
})
export class GreatThingsListComponent implements OnInit {

  @Input()
  public greatThings: Observable<GreatThingModel[]>;

  constructor() {
  }

  ngOnInit() {

  }
}
