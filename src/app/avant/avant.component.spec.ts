import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantComponent } from './avant.component';

describe('AvantComponent', () => {
  let component: AvantComponent;
  let fixture: ComponentFixture<AvantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
