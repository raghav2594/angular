import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDataService } from './services/product-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public products:any;
  public createResponse:any;
  public updateResponse:any;
  public deleteResponse:any;
  public productResponse:any;

  // For Create product
  public id:any;
  public name:any;
  public price:any;
  public model:any;

  //For Update product
  public id1:any;
  public name1:any;
  public price1:any;
  public model1:any;

  //For Get product
  public id2:any;
  public name2:any;
  public price2:any;
  public model2:any;

  //For Delete product
  public id3:any;
  public name3:any;
  public price3:any;
  public model3:any;


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

  createProduct(product:any) {
    this._produtService.createProduct(product).subscribe(
      (res:any) => {
        this.createResponse =  res
      }
    ); 
  }

  updateProduct(product:any) {
    this._produtService.updateProduct(product).subscribe(
      (res:any) => {
        this.updateResponse =  res
      }
    ); 
  }

  deleteProduct(id:number) {
    this._produtService.deleteProduct(id).subscribe(
      (res:any) => {
        this.deleteResponse =  res
      }
    ); 
  }

  getProduct(id:number) {
    this._produtService.getProduct(id).subscribe(
      (res:any) => {
        this.productResponse =  res
      }
    ); 
  }
}
