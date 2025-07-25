import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  imports: [],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent {

  sellers :string[];
  isHide : boolean;

  constructor() {
    this.sellers = ['Apple', 'RedMi', 'RealMe'];
    this.isHide = false;
  }

  getSellers(): string[] {
    return this.sellers;
  }

  toggle(): void {
    this.isHide = !this.isHide;
  }

}
