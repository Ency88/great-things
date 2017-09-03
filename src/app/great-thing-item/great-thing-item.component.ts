import {Component, Input, OnInit} from '@angular/core';
import {GreatThingModel} from '../models/greatThingModel';

@Component({
  selector: 'app-great-thing-item',
  templateUrl: './great-thing-item.component.html',
  styleUrls: ['./great-thing-item.component.css']
})
export class GreatThingItemComponent implements OnInit {

  @Input()
  public greatThingItem: GreatThingModel;

  constructor() {}

  ngOnInit() {
  }

}
