import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkopjeComponent } from './card-skopje.component';

describe('CardSkopjeComponent', () => {
  let component: CardSkopjeComponent;
  let fixture: ComponentFixture<CardSkopjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSkopjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSkopjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
