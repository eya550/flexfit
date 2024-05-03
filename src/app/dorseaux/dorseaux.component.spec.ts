import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorseauxComponent } from './dorseaux.component';

describe('DorseauxComponent', () => {
  let component: DorseauxComponent;
  let fixture: ComponentFixture<DorseauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DorseauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DorseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
