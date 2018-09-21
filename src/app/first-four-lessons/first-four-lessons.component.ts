import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-four-lessons',
  templateUrl: './first-four-lessons.component.html',
  styleUrls: ['./first-four-lessons.component.css']
})
export class FirstFourLessonsComponent implements OnInit {
  // title = 'AngularCourse - it is working!:)';
  myObject = {
    gebder: 'Man',
    age: 33,
    location: 'Poland'
  };

  myArr = ['him', 'hers', 'yours'];
  czarArr = ['Czaro', 'Maro'];
  secondArr = false;
  angularLogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  buttonStatus = false;
  buttonStatusOne = 'enabled'; // or OK to make it disabled


  constructor() { }

  ngOnInit() {  }

}
