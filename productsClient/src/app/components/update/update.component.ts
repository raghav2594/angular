import { Component } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
  standalone: true
})
export class UpdateComponent {

  public updateResponse:any;

  public id:any;
  public name:any;
  public price:any;
  public model:any;

    constructor(private _produtService:ProductDataService) { } // Assuming _produtService is injected properly

    updateProduct(product:any) {
    this._produtService.updateProduct(product).subscribe(
      (res:any) => {
        this.updateResponse =  res
      }
    ); 
  }


}
