import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'countries';
}
