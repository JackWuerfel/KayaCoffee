import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterCallout } from './newsletterCallout.component';

describe('Footer', () => {
  let component: NewsletterCallout;
  let fixture: ComponentFixture<NewsletterCallout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterCallout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterCallout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
