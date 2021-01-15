import { Component, OnInit } from '@angular/core';

import * as buildings from '../../data/buildings';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  constructor() { }

  miners = buildings.Miner;

  ngOnInit(): void {
    console.log(this.miners.mk1);
    console.log(buildings.Miner.mk2);
  }

}
