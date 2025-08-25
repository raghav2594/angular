import { Component } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  standalone: true
})
export class CreateComponent {

    // For Create product
  public id:any;
  public name:any;
  public price:any;
  public model:any;

  public createResponse:any;

  constructor(private _produtService:ProductDataService) {}

  createProduct(product:any) {
    this._produtService.createProduct(product).subscribe(
      (res:any) => {
        this.createResponse =  res
      }
    ); 
  }
}
