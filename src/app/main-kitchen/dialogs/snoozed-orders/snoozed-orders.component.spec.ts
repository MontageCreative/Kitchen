import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnoozedOrdersComponent } from './snoozed-orders.component';

describe('SnoozedOrdersComponent', () => {
  let component: SnoozedOrdersComponent;
  let fixture: ComponentFixture<SnoozedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnoozedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnoozedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
