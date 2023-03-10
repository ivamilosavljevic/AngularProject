import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPicsComponent } from './card-pics.component';

describe('CardPicsComponent', () => {
  let component: CardPicsComponent;
  let fixture: ComponentFixture<CardPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
