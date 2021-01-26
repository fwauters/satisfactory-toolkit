import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorAddDialogComponent } from './simulator-add-dialog.component';

describe('SimulatorAddDialogComponent', () => {
  let component: SimulatorAddDialogComponent;
  let fixture: ComponentFixture<SimulatorAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
