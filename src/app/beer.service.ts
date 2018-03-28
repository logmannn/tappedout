import { Beer } from './beer';
import { BEERS } from './beer-list';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BeerService {
  getBeers(): Observable<Beer[]> {
   // Todo: send the message _after_ fetching the heroes
   this.messageService.add('BeerService: fetched Beers');
   return of(BEERS);
 }
constructor(private messageService: MessageService) { }
}
