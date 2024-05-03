import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calories4Component } from './calories4.component';

describe('Calories4Component', () => {
  let component: Calories4Component;
  let fixture: ComponentFixture<Calories4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Calories4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Calories4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
