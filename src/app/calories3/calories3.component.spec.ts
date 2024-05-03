import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calories3Component } from './calories3.component';

describe('Calories3Component', () => {
  let component: Calories3Component;
  let fixture: ComponentFixture<Calories3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Calories3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Calories3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
