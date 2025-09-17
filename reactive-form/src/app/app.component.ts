import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public personForm!: FormGroup;

  ngOnInit() {
    this.personForm = new FormGroup({
      firstName: new FormControl("",[Validators.required, Validators.minLength(3), 
        Validators.maxLength(10)]),
      lastName: new FormControl('Raju'),
      email: new FormControl(),
      gender: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        country: new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.personForm.value);
    console.log(this.personForm.valid);

  }
}
