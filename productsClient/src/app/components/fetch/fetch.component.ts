import { Component } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-fetch',
  imports: [],
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css'
})
export class FetchComponent {

    public id2:any;
    public name2:any;
    public price2:any;
    public model2:any;

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
