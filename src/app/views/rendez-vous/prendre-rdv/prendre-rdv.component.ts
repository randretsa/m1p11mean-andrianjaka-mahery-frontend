import { Component, OnInit, inject } from '@angular/core';
import { ServicesService } from '../../../services/services/services.service';
import { UserService } from 'src/app/services/user.services';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrl: './prendre-rdv.component.scss'
})
export class PrendreRdvComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){}

  appointmentForm = this.formBuilder.group({
    date: [''],
    heure: [''],
    employe: [''],
    services: this.formBuilder.array([]),
    rappel: ['']
  });

  get services(){
    return this.appointmentForm.get('services') as FormArray;
  }

  serviceList: any = [];
  employeList: any = [];
  private serviceService = inject(ServicesService);
  private userService = inject(UserService);
  private appointmentService = inject(AppointmentService);

  ngOnInit(): void {
    this.loadServices();
    this.loadEmploye();
  }

  loadServices(){
    this.serviceService.getAllServices().subscribe({
      next: (services:any)=>{
        this.serviceList = services;
        for (let index = 0; index < this.serviceList.length; index++) {
          this.services.push(this.formBuilder.group({
            service_id: this.serviceList[index]._id
          }));
        }
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  loadEmploye(){
    this.userService.getUsersByPrivilege("EMPLOYEE").subscribe({
      next: (employees:any)=>{
        this.employeList = employees;
      },
      error: (error) => console.log('Error fetching employee',error)
    })
  }

  createAppointment(){
    let id = localStorage.getItem('_id') || ''
    const value = this.appointmentForm.value;
    const serviceValue:any = value.services?.map((service: any) =>{ return service.service_id });
    const realServ = []
    for (let i=0;i<serviceValue.length;i++){
      if(serviceValue[i]!=false){
        realServ.push(serviceValue[i])
      }
    }
    const appointmentInfo = {
      date: value.date,
      heure: value.heure,
      employe: value.employe,
      customer: id,
      services: realServ,
      rappel: value.rappel,
    }
    console.log(appointmentInfo);
    this.appointmentService.createAppointment(appointmentInfo).subscribe({
      next: (appointment:any)=>{
        console.log(appointment);
      },
      error: (error) => console.log('Error fetching employee',error)
    });
  }
}
