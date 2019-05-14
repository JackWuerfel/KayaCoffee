import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery } from './gallery.component';

describe('Gallery', () => {
  let component: Gallery;
  let fixture: ComponentFixture<Gallery>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
