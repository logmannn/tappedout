import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { DogService } from './dog.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DogService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
