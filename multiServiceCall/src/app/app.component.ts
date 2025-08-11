import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiServiceCallComponent } from './components/multi-service-call/multi-service-call.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MultiServiceCallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiServiceCall';
}
