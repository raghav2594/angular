import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries',
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
  standalone: true

})
export class CountriesComponent {
  
  public data:any;
  constructor(private _service:CountriesService){}

  ngOnInit() {
    this._service.getCountries().subscribe(
      (response:any) => {
      this.data = response;
      console.log(this.data);
    },
      (error:any) => {
        console.error('Error fetching countries:', error);
        this.data = [];
      }
  );
  }


}
