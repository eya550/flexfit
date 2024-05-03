import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpauleComponent } from './epaule.component';

describe('EpauleComponent', () => {
  let component: EpauleComponent;
  let fixture: ComponentFixture<EpauleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpauleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpauleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
