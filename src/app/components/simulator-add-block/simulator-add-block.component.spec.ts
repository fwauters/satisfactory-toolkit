import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorAddBlockComponent } from './simulator-add-block.component';

describe('SimulatorAddBlockComponent', () => {
  let component: SimulatorAddBlockComponent;
  let fixture: ComponentFixture<SimulatorAddBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorAddBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorAddBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
