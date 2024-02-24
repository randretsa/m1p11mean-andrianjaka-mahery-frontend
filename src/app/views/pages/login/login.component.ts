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
  loadingProgress = false;
  loginInfo = {
    email: 'bob.ituniversity@gmail.com',
    password:'randretsa'
  }

  constructor(private router: Router) { }

  submitLogin(){
    this.loadingProgress = true;
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
        this.loadingProgress = false;
      },
      error => {
        this.loadingProgress = false;
        this.router.navigate(['404']);

      }
    );  
  }

  connectParams(type: string){
    if (type == 'CLIENT'){
      this.loginInfo = {
        email: "rahaingo@gmail.com",
        password: "ihari"
      };
    }else if(type == 'ADMIN'){
      this.loginInfo = {
        email: "admin@gmail.com",
        password: "admin"
      }
    }else if(type=="EMPLOYEE"){
      this.loginInfo = {
        email: "bob.ituniversity@gmail.com",
        password: "randretsa"
      }
    }

  }

}
