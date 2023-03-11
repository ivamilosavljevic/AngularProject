import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenchePopupComponent } from './lenche-popup.component';

describe('LenchePopupComponent', () => {
  let component: LenchePopupComponent;
  let fixture: ComponentFixture<LenchePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenchePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenchePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
