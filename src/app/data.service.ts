import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'Renault', 'Ford', 'Opel'
  ];

  myData() {
    return 'This is my data, man!';
  }
}
