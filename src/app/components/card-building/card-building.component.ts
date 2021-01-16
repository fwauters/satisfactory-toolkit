import { Component, OnInit } from '@angular/core';

import * as buildings from '../../data/buildings';

@Component({
  selector: 'app-card-building',
  templateUrl: './card-building.component.html',
  styleUrls: ['./card-building.component.scss']
})
export class CardBuildingComponent implements OnInit {

  constructor() { }

  miners = buildings.Miners;

  test() {
    console.log("Yes it's works :)");
  }

  ngOnInit(): void {
  }

}
