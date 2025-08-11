import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-multi-service-call',
  imports: [CommonModule],
  templateUrl: './multi-service-call.component.html',
  styleUrl: './multi-service-call.component.css'
})
export class MultiServiceCallComponent {

  public userResult:any;
  public customerResult:any;
  constructor(private _userService: UserService, private _customerService:CustomerService) { }

  ngOnInit() {
      this._userService.getUserData().subscribe({
      next: (data) => {
        this.userResult = data;
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
    this._customerService.getCustomerData().subscribe({
      next: (data) => {
        this.customerResult = data;
        console.log(this.customerResult);
      },
      error: (error) => {
        console.error('Error fetching customer data:', error);
      }
    });
  }

}
