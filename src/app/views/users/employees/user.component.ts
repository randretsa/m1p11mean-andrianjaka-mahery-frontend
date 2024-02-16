import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.services';
import {formatDateForInput} from '../../../functions/ObjectHandler';
import {WorkScheduleService} from '../../../services/work_schedule'
@Component({
  templateUrl: 'user.component.html',
})
export class UserDetailComponent implements OnInit{
  
  route: ActivatedRoute = inject(ActivatedRoute);
  userService: UserService = inject(UserService);
  scheduleService: WorkScheduleService = inject(WorkScheduleService);

  user: any = {
      gender: {
        code: '',
        name: ''
    },
    _id: null,
    lastName: '',
    firstName: '',
    birthDate: null,
    email: '',
    phoneNumber: '',
    password: '',
    privilege: null,
  }

  schedule: any[] = [{
    employee_id: null,
    work_schedule: {
      start_time: '',
      end_time: '',
      breaks: []
    }
  }]

  constructor(){
    const userId = this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(data => this.user = data);
    this.scheduleService.getEmployeeSchedule(userId).subscribe(
      data => this.schedule = data
    );
}

  ngOnInit(): void {
 
  }

  formatDateForInput = formatDateForInput;
  
  updateSchedule(){
    console.log(this.schedule);
  }
}
