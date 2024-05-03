import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calories2Component } from './calories2.component';

describe('Calories2Component', () => {
  let component: Calories2Component;
  let fixture: ComponentFixture<Calories2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Calories2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Calories2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
