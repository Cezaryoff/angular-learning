import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html', //this is default place for html component
  // template: '<h1>Hello World!</h1>',  single line
  template:
      `<app-first-four-lessons></app-first-four-lessons>
  <app-five-to></app-five-to>,
  <app-ten-animations></app-ten-animations>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
