import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GreatThingsListComponent } from './great-things-list/great-things-list.component';
import { GreatThingItemComponent } from './great-thing-item/great-thing-item.component';
import { NewThingFormComponent } from './new-thing-form/new-thing-form.component';
import {GreatThingsFirebaseService} from './services/great-things-firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    HomeComponent,
    GreatThingsListComponent,
    GreatThingItemComponent,
    NewThingFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [GreatThingsFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
