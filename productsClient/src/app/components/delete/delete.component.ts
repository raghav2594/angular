import { Component } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  imports: [CommonModule, FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
  standalone: true
})
export class DeleteComponent {

  
  public id:any;
  public name:any;
  public price:any;
  public model:any;

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
