import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  imports: [],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  public updateResponse:any;

  public id1:any;
  public name1:any;
  public price1:any;
  public model1:any;

    constructor(private _produtService:any) { } // Assuming _produtService is injected properly

    updateProduct(product:any) {
    this._produtService.updateProduct(product).subscribe(
      (res:any) => {
        this.updateResponse =  res
      }
    ); 
  }


}
