import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calories5Component } from './calories5.component';

describe('Calories5Component', () => {
  let component: Calories5Component;
  let fixture: ComponentFixture<Calories5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Calories5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Calories5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
