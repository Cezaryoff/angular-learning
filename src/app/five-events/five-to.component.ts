import { Component, OnInit } from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';
import { DataService} from '../data.service';

@Component({
  selector: 'app-five-to',
  templateUrl: './five-to.component.html',
  styleUrls: ['./five-to.component.css']
})
export class FiveToComponent implements OnInit {
  // titleClass = 'red-title';
  titleClass = true;

  //tu są klasy, a deklaracje ich styli są w CSSach...
  titleClasses = {
    'red-title': true,
    'large-title': true
  };

  styleForTitle = 'blue';
  styleForTitleOne = false;

  //a tu są bezpośrednio style!!1
  stylesForTitles = {
    'color': 'magenta',
    'font-size': '4em',
  };

  somePropertyForCheckDataService:string = '';

  constructor(private dataService: DataService) { }

  //to odpala kontruktor
  ngOnInit() {
    console.log(this.dataService.cars);
    this.somePropertyForCheckDataService = this.dataService.myData();
  }

  myEvent(event) {
    console.log(event);
  }

  printValues(tekst) {
    console.log(tekst);
  }



}
