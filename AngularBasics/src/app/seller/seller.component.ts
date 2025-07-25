import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  imports: [],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent {

  sellers :string[];

  constructor() {
    this.sellers = ['Apple', 'RedMi', 'RealMe'];
  }

  getSellers(): string[] {
    return this.sellers;
  }

}
