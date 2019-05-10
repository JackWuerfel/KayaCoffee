import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals } from './modals.component';

describe('Modals', () => {
  let component: Modals;
  let fixture: ComponentFixture<Modals>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modals ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
