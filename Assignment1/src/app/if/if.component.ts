import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if',
  imports: [CommonModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
  standalone: true
})
export class IfComponent {

  x: number;
  y: number;

  constructor() {
    this.x = 10;
    this.y = 20;
  }
}
