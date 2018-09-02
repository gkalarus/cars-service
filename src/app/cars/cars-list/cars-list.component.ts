import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {

  totalCost : number;
  grossCost : number;

  cars : Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2018',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2018',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 400,
      isFullyDamaged: false
    },
    {
      id: 3,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2018',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 700,
      isFullyDamaged: true
    },
  ];

  constructor() { }

  ngOnInit() {
    this.countTotalCost();
  }

  countTotalCost() : void {
     this.totalCost = this.cars.map(car => car.cost).reduce((prev, curr) => prev + curr);
  }

  onShownGross(grossCost : number) : void {
    this.grossCost = grossCost;
  }

}
