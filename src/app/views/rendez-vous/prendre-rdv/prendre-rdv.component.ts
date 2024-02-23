import { Component, OnInit, inject } from '@angular/core';
import { ServicesService } from '../../../services/services/services.service';
import { UserService } from 'src/app/services/user.services';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrl: './prendre-rdv.component.scss'
})
export class PrendreRdvComponent implements OnInit{

  appointmentInfo = {
    date: new Date(),
    heure: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    employe: '',
    services: [],
    rappel: 0
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
    console.log(this.appointmentInfo);
    this.appointmentService.createAppointment(this.appointmentInfo).subscribe({
      next: (appointment:any)=>{
        console.log(appointment);
      },
      error: (error) => console.log('Error fetching employee',error)
    });
  }
}
