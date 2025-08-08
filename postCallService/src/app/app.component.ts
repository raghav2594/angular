import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UppercaseConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'postCall';
}
