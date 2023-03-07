import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAccomodationComponent } from './cards-accomodation.component';

describe('CardsAccomodationComponent', () => {
  let component: CardsAccomodationComponent;
  let fixture: ComponentFixture<CardsAccomodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAccomodationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
