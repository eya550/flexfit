import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workout3Component } from './workout3.component';

describe('Workout3Component', () => {
  let component: Workout3Component;
  let fixture: ComponentFixture<Workout3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Workout3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Workout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
