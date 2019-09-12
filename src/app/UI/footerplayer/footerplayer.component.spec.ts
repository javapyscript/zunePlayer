import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterplayerComponent } from './footerplayer.component';

describe('FooterplayerComponent', () => {
  let component: FooterplayerComponent;
  let fixture: ComponentFixture<FooterplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
