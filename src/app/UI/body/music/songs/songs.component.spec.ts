import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SONGSComponent } from './songs.component';

describe('SONGSComponent', () => {
  let component: SONGSComponent;
  let fixture: ComponentFixture<SONGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SONGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SONGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
