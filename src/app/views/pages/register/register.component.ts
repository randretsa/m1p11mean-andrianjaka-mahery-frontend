import { Component, OnInit, inject } from '@angular/core';
import {UserService} from '../../../services/user.services';
import { IUser } from 'src/app/types/user';
import { Router } from '@angular/router';
import {IEmail} from '../../../types/email';
import { EmailService } from '../../../services/emails/email.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public users: IUser[] = [];
  userService: UserService = inject(UserService);
  emailService: EmailService = inject(EmailService);
  loadingProgress = false;
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
    this.loadingProgress = true;
    this.userService.register(this.user)
    .subscribe(
      response => { 
        const emailContent: IEmail = {
          text: "Bonjour "+ response.lastName+". Votre inscription est réussi",
          receiver: response.email,
          subject: "Confirmation inscription"
          
        }
        this.loadingProgress = false;
        // this.emailService.sendEmail(emailContent).subscribe(
        //   response => {
        //     console.log(response);
        //     this.router.navigate(['login']);

        //   },
        //   error => {
        //     console.log(error)
        //   }
        // );
          
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
