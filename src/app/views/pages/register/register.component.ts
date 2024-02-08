import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {UserService} from '../../../services/user.services';
import { IUser } from 'src/app/types/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public users: IUser[] = [];
  userService: UserService = inject(UserService);

  constructor() { }

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  submitApplication(){
    
    const user = {
        gender: {
          code: this.applyForm.value.gender,
          name: null
      },
      _id: null,
      lastName: this.applyForm.value.lastName,
      firstName: this.applyForm.value.firstName,
      birthDate: this.applyForm.value.birthDate,
      email: this.applyForm.value.email,
      phoneNumber: this.applyForm.value.phoneNumber,
      password: this.applyForm.value.password,
      privilege: "65c394939fc65f798c79a4cb",
  } 

    this.userService.register(user)
    .subscribe(
      response => console.log('Succes!', response),
      error => console.log('Error!', error),
      
    );

  }

  ngOnInit(){
    this.userService.getUsers()
    .subscribe(data => this.users = data);
  }

}
