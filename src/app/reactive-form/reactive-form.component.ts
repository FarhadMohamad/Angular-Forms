import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public title: string = "Angular Reactive Form";
  public userDetails: FormGroup;
  constructor() { 

    this.userDetails = new FormGroup({
    firstName: new FormControl('', Validators.required), 
    lastName: new FormControl('', [Validators.required, Validators.minLength(7)]),
    email: new FormControl('', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    address: new FormGroup({
      addressLine1: new FormControl(),
      addressLine2: new FormControl()
    }),
  country: new FormControl()
  });
}

  public onFormSubmit(): void {

    console.log(this.userDetails.value);
  }

}
