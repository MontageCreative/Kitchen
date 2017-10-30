import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupNamesComponent } from './edit-group-names.component';

describe('EditGroupNamesComponent', () => {
  let component: EditGroupNamesComponent;
  let fixture: ComponentFixture<EditGroupNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGroupNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
