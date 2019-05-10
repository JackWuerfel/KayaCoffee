import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation } from './navigation.component';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
