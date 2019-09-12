import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALBUMSComponent } from './albums.component';

describe('ALBUMSComponent', () => {
  let component: ALBUMSComponent;
  let fixture: ComponentFixture<ALBUMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALBUMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALBUMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
