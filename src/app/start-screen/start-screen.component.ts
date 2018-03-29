import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {
  test = true;
  constructor() { }

  ngOnInit() {
  }

  submitBirthday() {
    this.test = false;
  }

}
