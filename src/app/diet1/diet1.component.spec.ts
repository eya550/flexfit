import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diet1Component } from './diet1.component';

describe('Diet1Component', () => {
  let component: Diet1Component;
  let fixture: ComponentFixture<Diet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diet1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Diet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
