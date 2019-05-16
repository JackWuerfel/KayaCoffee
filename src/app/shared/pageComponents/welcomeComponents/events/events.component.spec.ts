import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Events } from './events.component';

describe('Events', () => {
  let component: Events;
  let fixture: ComponentFixture<Events>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Events ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Events);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
