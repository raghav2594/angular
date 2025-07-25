import { Component } from '@angular/core';
import { SellerComponent } from '../seller/seller.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SellerComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  id:number;
  name:string;
  price:number;
  
  constructor() {
    this.id = 1;
    this.name = 'Sample Product';
    this.price = 100;
  }
  public getProductDetails() {
    return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}
