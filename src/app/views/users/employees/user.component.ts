import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.services';
import {formatDateForInput} from '../../../functions/ObjectHandler';
import {WorkScheduleService} from '../../../services/work_schedule'
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
@Component({
  templateUrl: 'user.component.html',
})
export class UserDetailComponent{

  // States of the component
    route: ActivatedRoute = inject(ActivatedRoute);
    userService: UserService = inject(UserService);
    scheduleService: WorkScheduleService = inject(WorkScheduleService);
    isNew = true;

    user: any = {
        gender: {
          code: '',
          name: ''
      },
      lastName: '',
      firstName: '',
      birthDate: null,
      email: '',
      phoneNumber: '',
      password: '',
      privilege: {
        _id: null,
        code: 'EMPLOYEE',
        name: null
      },
    }

    schedule: any = {
      _id: null,
      employee_id: null,
      work_schedule: {
        start_time: '',
        end_time: '',
        breaks: []
      }
    }

    profileForm = this.formBuilder.group({
      lastName: [''],
      firstName: [''],
      gender:[''],
      dateOfBirth:[''],
      phoneNumber:[''],
      start_time:[],
      end_time:[],
      email:[''],
      password:[''],
      aliases: this.formBuilder.array([
        // this.formBuilder.group({
        //   start_time: [''],
        //   end_time: ['']
        // })
      ]),
    }
    );

  //Listeners 
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.formBuilder.group({
      start_time: [''],
      end_time: ['']
    }));
  }
  
  updateProfil(){
    const profil = this.profileForm.value;
    this.syncUserWithPostData(profil);

    this.userService.updateUser(this.user).subscribe(
      updated => console.log(updated)
    );
    
    if(this.user.privilege.code ==='EMPLOYEE'){
      const schedule =  {
        _id: this.schedule._id,
        employee_id: this.user._id,
        work_schedule: {
          start_time: profil.start_time,
          end_time: profil.end_time,
          breaks: profil.aliases
        }
      }
      this.scheduleService.updateEmployeeSchedule(schedule).subscribe(
        updated => console.log(updated)
      );
    }
    this.router.navigate(['/users/user-list']);
  }

  createEmployeeProfil(){
    const profil = this.profileForm.value;
    this.syncUserWithPostData(profil);
    this.user.privilege = "65c394939fc65f798c79a4cc";
 
    this.userService.saveUser(this.user).subscribe(
      savedEmployee => {
        const schedule =  {
          employee_id: savedEmployee._id,
          work_schedule: {
            start_time: profil.start_time,
            end_time: profil.end_time,
            breaks: profil.aliases
          }
        }
        this.scheduleService.saveSchedule(schedule).subscribe(
          () => {
            this.router.navigate(['/users/user-list']);
          }
        );
      }
    );
  }

  syncUserWithPostData(form: any){
    this.user.gender.code = form.gender,
    this.user.lastName = form.lastName,
    this.user.firstName = form.firstName,
    this.user.birthDate = form.dateOfBirth,
    this.user.email = form.email,
    this.user.phoneNumber = form.phoneNumber,
    this.user.password = form.password
  }

  constructor(private formBuilder: FormBuilder, private router: Router){
  }

  ngOnInit(){
    this.route.params.subscribe((params: any)=> {
      const userId = params.id;
      if(userId!==''){
        this.userService.getUserById(userId).subscribe(data =>{ 
            this.user = data;
            this.profileForm.patchValue({
              lastName:this.user.lastName,
              firstName: this.user.firstName,
              gender: this.user.gender.code,
              email: this.user.email,
              password: this.user.password,
              dateOfBirth: formatDateForInput(this.user.birthDate),
              phoneNumber: this.user.phoneNumber
            });
      });
         this.isNew = false; 
      } 
      this.scheduleService.getEmployeeSchedule(userId).subscribe(
        data => {
            this.schedule = data;
            if(this.schedule?.work_schedule!==undefined){
              this.profileForm.patchValue({
                start_time: this.schedule.work_schedule.start_time,
                end_time: this.schedule.work_schedule.end_time,
              });
    
              for (let index = 0; index < this.schedule.work_schedule.breaks.length; index++) {
                const pause = this.schedule.work_schedule.breaks[index];
                this.aliases.push(this.formBuilder.group({
                  start_time: [pause.start_time],
                  end_time: [pause.end_time]
                }));
              }
            }
        } 
      );
  
    })
  }
}
