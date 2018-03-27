import { Dog } from './dog';
import { DOGS } from './dog-list';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DogService {
  getDogs(): Observable<Dog[]> {
   // Todo: send the message _after_ fetching the heroes
   this.messageService.add('DogService: fetched dogs');
   return of(DOGS);
 }
constructor(private messageService: MessageService) { }
}
