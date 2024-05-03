import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkdietComponent } from './bulkdiet.component';

describe('BulkdietComponent', () => {
  let component: BulkdietComponent;
  let fixture: ComponentFixture<BulkdietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulkdietComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkdietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
