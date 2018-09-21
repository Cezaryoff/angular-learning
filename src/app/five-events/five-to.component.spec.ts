import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveToComponent } from './five-to.component';


describe('FiveToComponent', () => {
  let component: FiveToComponent;
  let fixture: ComponentFixture<FiveToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
