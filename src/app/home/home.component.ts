import {Component, OnInit} from '@angular/core';
import {GreatThingModel} from '../models/greatThingModel';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public greatThings: Observable<GreatThingModel[]>;

  constructor() {
    this.greatThings = Observable.of([
      {
        title: 'Test title 1',
        subTitle: 'subtitle',
        imageUrl: 'https://webdev.dartlang.org/assets/angulardart-5e7ebca88c5584b1da301f9f9e61d1e7d4f0688b6a9222991cde3bada950088c.svg'
      },
      {
        title: 'Test title 2',
        subTitle: 'subtitle',
        imageUrl: 'https://webdev.dartlang.org/assets/angulardart-5e7ebca88c5584b1da301f9f9e61d1e7d4f0688b6a9222991cde3bada950088c.svg'
      },
      {
        title: 'Test title 3',
        subTitle: 'subtitle',
        imageUrl: 'https://webdev.dartlang.org/assets/angulardart-5e7ebca88c5584b1da301f9f9e61d1e7d4f0688b6a9222991cde3bada950088c.svg'
      },
      {
        title: 'Test title 4',
        subTitle: 'subtitle',
        imageUrl: 'https://webdev.dartlang.org/assets/angulardart-5e7ebca88c5584b1da301f9f9e61d1e7d4f0688b6a9222991cde3bada950088c.svg'
      },
      {
        title: 'Test title 5',
        subTitle: 'subtitle',
        imageUrl: 'https://webdev.dartlang.org/assets/angulardart-5e7ebca88c5584b1da301f9f9e61d1e7d4f0688b6a9222991cde3bada950088c.svg'
      }
    ]);
  }

  ngOnInit() {
  }

}
