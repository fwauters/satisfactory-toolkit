import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SimulatorAddDialogComponent } from '../simulator-add-dialog/simulator-add-dialog.component';

@Component({
  selector: 'app-simulator-add-block',
  templateUrl: './simulator-add-block.component.html',
  styleUrls: ['./simulator-add-block.component.scss']
})
export class SimulatorAddBlockComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SimulatorAddDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Add Simulation result: ${result}`);
    });
  }

}
