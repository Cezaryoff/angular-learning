import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFourLessonsComponent } from './first-four-lessons.component';

describe('FirstFourLessonsComponent', () => {
  let component: FirstFourLessonsComponent;
  let fixture: ComponentFixture<FirstFourLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstFourLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFourLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
