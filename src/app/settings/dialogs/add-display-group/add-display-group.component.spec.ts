import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisplayGroupComponent } from './add-display-group.component';

describe('AddDisplayGroupComponent', () => {
  let component: AddDisplayGroupComponent;
  let fixture: ComponentFixture<AddDisplayGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisplayGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisplayGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
