import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DOGS } from '../dog-list';
import { DogService } from '../dog.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: Dog[];
  selectedDog: Dog;

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.getDogs()
  }

  onSelect(dog: Dog): void{
    this.selectedDog = dog;
  }

  getDogs(): void {
  this.dogService.getDogs()
    .subscribe(dogs => this.dogs = dogs);
  }

}
