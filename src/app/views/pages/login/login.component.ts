import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userService: UserService = inject(UserService);

  loginInfo = {
    email: '',
    password:''
  }

  constructor(private router: Router) { }

  submitLogin(){
    this.userService.login(this.loginInfo)
    .subscribe(
      response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('_id', response._id);
        this.router.navigate(['client/historique']);
      },
      error => {
        this.router.navigate(['404']);
      }
    );  
  }
}
