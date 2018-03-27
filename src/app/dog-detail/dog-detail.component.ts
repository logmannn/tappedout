import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  @Input() dog: Dog;

  constructor() { }

  ngOnInit() {
  }

}
