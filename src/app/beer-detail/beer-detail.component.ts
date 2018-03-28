import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {
  }

  subtractPint() {
    if (this.beer.pint > 0) {this.beer.pint-1;}
  }

}
