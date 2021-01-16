import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBuildingComponent } from './card-building.component';

describe('CardBuildingComponent', () => {
  let component: CardBuildingComponent;
  let fixture: ComponentFixture<CardBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
