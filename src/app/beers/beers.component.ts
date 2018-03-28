import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BEERS } from '../beer-list';
import { BeerService } from '../beer.service';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: Beer[];
  selectedBeer: Beer;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers()
  }

  onSelect(beer: Beer): void{
    this.selectedBeer = beer;
  }

  getBeers(): void {
  this.beerService.getBeers()
    .subscribe(beers => this.beers = beers);
  }

}
