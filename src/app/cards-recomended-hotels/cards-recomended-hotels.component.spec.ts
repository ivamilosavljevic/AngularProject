import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRecomendedHotelsComponent } from './cards-recomended-hotels.component';

describe('CardsRecomendedHotelsComponent', () => {
  let component: CardsRecomendedHotelsComponent;
  let fixture: ComponentFixture<CardsRecomendedHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsRecomendedHotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsRecomendedHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
