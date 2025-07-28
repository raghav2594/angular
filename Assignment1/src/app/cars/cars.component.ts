import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ICar{
  name: string;
  make: string;
  model: string;
  year: number;
}
@Component({
  selector: 'app-cars',
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
  standalone: true
})

export class CarsComponent {
  private cars: ICar[];
  hideCar: boolean;

  constructor() {
    this.cars = [
      { name: 'Car1', make: 'Toyota', model: 'Corolla', year: 2020 },
      { name: 'Car2', make: 'Honda', model: 'Civic', year: 2019 },
      { name: 'Car3', make: 'Ford', model: 'Focus', year: 2021 }
    ];
    this.hideCar = false;
  }

  getCars(): ICar[] {
    return this.cars;
  }

  getHideCar(): boolean {
    return this.hideCar =! this.hideCar;
  }
}
