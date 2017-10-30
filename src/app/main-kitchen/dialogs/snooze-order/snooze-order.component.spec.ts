import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnoozeOrderComponent } from './snooze-order.component';

describe('SnoozeOrderComponent', () => {
  let component: SnoozeOrderComponent;
  let fixture: ComponentFixture<SnoozeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnoozeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnoozeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
