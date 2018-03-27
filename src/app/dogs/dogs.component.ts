import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DOGS } from '../dog-list';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs = DOGS;
  selectedDog: Dog;

  constructor() { }

  ngOnInit() {
  }

  onSelect(dog: Dog): void{
    this.selectedDog = dog;
  }

}
