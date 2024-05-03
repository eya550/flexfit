import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdosComponent } from './abdos.component';

describe('AbdosComponent', () => {
  let component: AbdosComponent;
  let fixture: ComponentFixture<AbdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbdosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
