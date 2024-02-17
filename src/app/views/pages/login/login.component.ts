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
        localStorage.setItem('_id', response.user._id);
        const user:any = response.user;
        localStorage.setItem('user', JSON.stringify(response.user));
        if (user.privilege.code=="CLIENT"){
          this.router.navigate(['rendez-vous/prendre']);
        } else if (user.privilege.code=="EMPLOYEE"){
          this.router.navigate(['rendez-vous/list']);
        } else if(user.privilege.code=="MANAGER"){
          this.router.navigate(['/users/user-list']);
        }
      },
      error => {
        this.router.navigate(['404']);
      }
    );  
  }
}
