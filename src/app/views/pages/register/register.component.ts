import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  applyForm = new FormGroup({
    firstName: new FormControl('')
  });

  submitApplication(){
    console.log(this.applyForm.value.firstName ?? '');
  }
  constructor() { }

}
