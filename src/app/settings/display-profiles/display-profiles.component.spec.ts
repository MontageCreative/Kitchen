import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfilesComponent } from './display-profiles.component';

describe('DisplayProfilesComponent', () => {
  let component: DisplayProfilesComponent;
  let fixture: ComponentFixture<DisplayProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
