import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductDataService } from './services/product-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { CreateComponent } from './components/create/create.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule,
    CreateComponent, FetchComponent, UpdateComponent, DeleteComponent, RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  public products:any;

  constructor(private _produtService:ProductDataService){}

  ngOnInit() {
    this._produtService.getProducts().subscribe(
      (data:any) => {
        this.products = data;
      },
      (error:any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

}
