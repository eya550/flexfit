import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workout2Component } from './workout2.component';

describe('Workout2Component', () => {
  let component: Workout2Component;
  let fixture: ComponentFixture<Workout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Workout2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Workout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
