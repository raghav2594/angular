import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true
})
export class AppComponent {
  title = 'Assignment1';
}
