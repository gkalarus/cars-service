import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

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
      isFullyDamages: true
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
      cost: 300,
      isFullyDamages: true
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
      cost: 300,
      isFullyDamages: true
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
