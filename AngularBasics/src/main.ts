import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { ProductComponent } from './app/product/product.component';

bootstrapApplication(AppComponent, appConfig)
// .uncomment the line below to bootstrap ProductComponent instead of AppComponent
// bootstrapApplication(ProductComponent, appConfig) 


  .catch((err) => console.error(err));
