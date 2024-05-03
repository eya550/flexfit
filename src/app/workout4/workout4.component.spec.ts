import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workout4Component } from './workout4.component';

describe('Workout4Component', () => {
  let component: Workout4Component;
  let fixture: ComponentFixture<Workout4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Workout4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Workout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
