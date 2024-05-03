import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleandietComponent } from './cleandiet.component';

describe('CleandietComponent', () => {
  let component: CleandietComponent;
  let fixture: ComponentFixture<CleandietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleandietComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CleandietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
