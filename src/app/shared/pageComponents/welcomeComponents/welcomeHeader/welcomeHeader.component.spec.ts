import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHeader } from './welcomeHeader.component';

describe('WelcomeHeader', () => {
  let component: WelcomeHeader;
  let fixture: ComponentFixture<WelcomeHeader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeHeader ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
