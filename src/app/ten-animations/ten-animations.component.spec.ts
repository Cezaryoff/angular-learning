import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenAnimationsComponent } from './ten-animations.component';

describe('TenAnimationsComponent', () => {
  let component: TenAnimationsComponent;
  let fixture: ComponentFixture<TenAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
