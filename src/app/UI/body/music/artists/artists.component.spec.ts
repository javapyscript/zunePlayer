import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARTISTSComponent } from './artists.component';

describe('ARTISTSComponent', () => {
  let component: ARTISTSComponent;
  let fixture: ComponentFixture<ARTISTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARTISTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARTISTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
