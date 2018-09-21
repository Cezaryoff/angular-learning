import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-ten-animations',
  templateUrl: './ten-animations.component.html',
  styleUrls: ['./ten-animations.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state ('small', style ({
        transform: 'scale(1)',
      })),
      state ('large', style ({
        transform: 'scale(1.2)',
      })),

      // transition('small <=> large', animate('300ms ease-in', style({
      //     transform: 'translateY(40px)'
      //   }))), simple way

      transition('small <=> large', animate('300ms ease-in',
        keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)', offset: 0.5}),
          style({opacity: 1, transform: 'translateX(45px)', offset: 1}),
        ]))),

      // transition('large => small', animate('3000ms ease-in')),
    ])
  ]
})
export class TenAnimationsComponent implements OnInit {
  state = 'small';
  constructor() { }

  ngOnInit() {
  }

  animateMe() {
    this.state = (this.state === 'small' ?  'large' : 'small');
  }
}
