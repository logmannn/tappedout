import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerService } from './beer.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { RogerComponent } from './roger/roger.component';
import { BirthdateComponent } from './birthdate/birthdate.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeerDetailComponent,
    MessagesComponent,
    RogerComponent,
    BirthdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BeerService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
