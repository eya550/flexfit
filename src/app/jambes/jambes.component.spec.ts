import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JambesComponent } from './jambes.component';

describe('JambesComponent', () => {
  let component: JambesComponent;
  let fixture: ComponentFixture<JambesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JambesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JambesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
