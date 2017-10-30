import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BumpOrderComponent } from './bump-order.component';

describe('BumpOrderComponent', () => {
  let component: BumpOrderComponent;
  let fixture: ComponentFixture<BumpOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BumpOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BumpOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
