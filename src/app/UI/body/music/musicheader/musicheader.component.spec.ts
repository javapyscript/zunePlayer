import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicheaderComponent } from './musicheader.component';

describe('MusicheaderComponent', () => {
  let component: MusicheaderComponent;
  let fixture: ComponentFixture<MusicheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
