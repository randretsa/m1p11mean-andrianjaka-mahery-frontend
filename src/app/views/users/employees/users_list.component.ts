import {Component, OnInit, inject} from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { IUser } from 'src/app/types/user';

@Component({
    templateUrl: 'users_list.component.html',
})
export class UsersListComponent implements OnInit{
    public employees: IUser[] = [];
    userService: UserService = inject(UserService);

    ngOnInit(): void {
        this.userService.getUsersByPrivilege('EMPLOYEE')
        .subscribe(data => this.employees = data);
    }
}