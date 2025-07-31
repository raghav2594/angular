import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarsComponent, IfComponent, SwitchComponent, ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true
})
export class AppComponent {
  title = 'Assignment1';
}
