import { Component, OnInit } from '@angular/core';
import { cars } from './../../../../../../cars';

@Component({
  selector: 'app-vehicles-available',
  templateUrl: './vehicles-available.component.html',
  styleUrls: ['./vehicles-available.component.scss']
})
export class VehiclesAvailableComponent implements OnInit {

  constructor() { }

  cars = cars;

  ngOnInit(): void {
  }

}
