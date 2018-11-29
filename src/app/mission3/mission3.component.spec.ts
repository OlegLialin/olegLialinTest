import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mission3Component } from './mission3.component';

describe('Mission3Component', () => {
  let component: Mission3Component;
  let fixture: ComponentFixture<Mission3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mission3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mission3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
