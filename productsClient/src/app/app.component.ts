import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDataService } from './services/product-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public products:any;
  constructor(private _produtService:ProductDataService){}

  ngOnInit() {
    this._produtService.getProducts().subscribe(
      (data:any) => {
        this.products = data;
      },
      (error:any) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
