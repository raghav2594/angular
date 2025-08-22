import { Component } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-delete',
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  
  public id3:any;
  public name3:any;
  public price3:any;
  public model3:any;

  public deleteResponse:any;

  constructor(private _produtService:ProductDataService){}

  
  deleteProduct(id:number) {
    this._produtService.deleteProduct(id).subscribe(
      (res:any) => {
        this.deleteResponse =  res
      }
    ); 
  }
  

}
