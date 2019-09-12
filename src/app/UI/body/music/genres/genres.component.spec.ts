import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GENRESComponent } from './genres.component';

describe('GENRESComponent', () => {
  let component: GENRESComponent;
  let fixture: ComponentFixture<GENRESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GENRESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GENRESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
