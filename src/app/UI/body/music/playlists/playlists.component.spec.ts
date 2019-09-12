import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLAYLISTSComponent } from './playlists.component';

describe('PLAYLISTSComponent', () => {
  let component: PLAYLISTSComponent;
  let fixture: ComponentFixture<PLAYLISTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLAYLISTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLAYLISTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
