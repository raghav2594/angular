import { Component } from '@angular/core';
import { UppercaseConterverServiceService } from '../../services/uppercase-conterver-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-uppercase-converter',
  imports: [FormsModule, CommonModule],
  templateUrl: './uppercase-converter.component.html',
  styleUrl: './uppercase-converter.component.css'
})
export class UppercaseConverterComponent {

  result:any;
  my_message:any;
  constructor(private _service: UppercaseConterverServiceService) { }

  convert(obj :any) :any{
    this._service.convertToUpperCase(obj).subscribe(
      (res:any) => this.result = res,
      (error:HttpErrorResponse) => console.log(error)
    );
  }
}
