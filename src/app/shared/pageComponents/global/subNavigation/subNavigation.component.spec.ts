import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavigation } from './subNavigation.component';

describe('Navigation', () => {
  let component: SubNavigation;
  let fixture: ComponentFixture<SubNavigation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNavigation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
