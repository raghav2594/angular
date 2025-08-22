import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

    // For Create product
  public id:any;
  public name:any;
  public price:any;
  public model:any;

  public createResponse:any;

  constructor(private _produtService:any) {}

  createProduct(product:any) {
    this._produtService.createProduct(product).subscribe(
      (res:any) => {
        this.createResponse =  res
      }
    ); 
  }
}
