import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerService } from './beer.service';
import { BirthdateComponent } from './birthdate/birthdate.component';
import { StartScreenComponent } from './start-screen/start-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeerDetailComponent,
    BirthdateComponent,
    StartScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
