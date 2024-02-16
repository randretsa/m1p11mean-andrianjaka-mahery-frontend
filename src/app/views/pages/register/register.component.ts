import { Component, OnInit, inject } from '@angular/core';
import {UserService} from '../../../services/user.services';
import { IUser } from 'src/app/types/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public users: IUser[] = [];
  userService: UserService = inject(UserService);
  user = {
    gender: {
      code: '',
      name: ''
  },
  _id: null,
  lastName: '',
  firstName: '',
  birthDate: '',
  email: '',
  phoneNumber: '',
  password: '',
  privilege: "65c394939fc65f798c79a4cb",
} 

  constructor(private router: Router) { }


  submitApplication(){
    this.userService.register(this.user)
    .subscribe(
      response => { 
        console.log('Succes!', response)
        this.router.navigate(['login']);
      },
      error => console.log('Error!', error),
      
    );

  }

  ngOnInit(){
    this.userService.getUsers()
    .subscribe(data => this.users = data);
  }

}
