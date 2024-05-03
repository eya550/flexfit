import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PectorauxComponent } from './pectoraux.component';

describe('PectorauxComponent', () => {
  let component: PectorauxComponent;
  let fixture: ComponentFixture<PectorauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PectorauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PectorauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
