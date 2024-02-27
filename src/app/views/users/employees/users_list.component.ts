import {Component, OnInit, inject} from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { IUser } from 'src/app/types/user';

@Component({
    templateUrl: 'users_list.component.html',
})
export class UsersListComponent implements OnInit{
    public employees: IUser[] = [];
    userService: UserService = inject(UserService);

    userInfo = {
      lastName:null,
      firstName:null
    }

    ngOnInit(): void {
        this.userService.getUsersByPrivilege('EMPLOYEE')
        .subscribe(data => this.employees = data);
    }

    searchEmploye(){
        console.log(this.userInfo)
        this.userService.searchEmploye(this.userInfo).subscribe({
            next: (users:any)=>{
                this.employees = users;
                this.userInfo = {
                    lastName:null,
                    firstName:null
                }
            },
            error: (error) => console.log('Error fetching appointment',error)
        });
    }
}