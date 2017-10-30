import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecallItemComponent } from './recall-item.component';

describe('RecallItemComponent', () => {
  let component: RecallItemComponent;
  let fixture: ComponentFixture<RecallItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecallItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
