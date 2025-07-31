import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-switch',
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
  standalone: true
})
export class SwitchComponent {

  choice : number;

  constructor() {
    this.choice = 5;
  }
}
