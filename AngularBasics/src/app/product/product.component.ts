import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from '../seller/seller.component';


interface Product{
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SellerComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {

  products: Product[]
   constructor() {
    this.products = [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 },
      { id: 3, name: 'Product C', price: 300 }
    ];   
  }
   getProducts(): Product[] {
      return this.products;
    }
}
