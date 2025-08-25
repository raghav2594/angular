import { Component } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

@Component({
  selector: 'app-fetch',
  imports: [CommonModule, FormsModule],
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css',
  standalone: true
})
export class FetchComponent {

    public id:any;
    public name:any;
    public price:any;
    public model:any;

    public productResponse:any;

    constructor(private _produtService:ProductDataService){}
    
    getProduct(id:number) {
    this._produtService.getProduct(id).subscribe(
      (res:any) => {
        this.productResponse =  res
      }
    ); 
  }

  
}
