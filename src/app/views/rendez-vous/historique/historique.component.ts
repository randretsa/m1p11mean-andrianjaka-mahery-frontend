import { Component, OnInit, inject } from '@angular/core';
import { AppointmentService } from '../../../services/appointment/appointment.service';
import { Router, NavigationExtras } from '@angular/router';
import { NotificationService } from 'src/app/services/notifications/notification.service';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss'
})
export class HistoriqueComponent implements OnInit{

  appoitmentList: any = [];
  notificationService: NotificationService = inject(NotificationService);
  private appointmentService = inject(AppointmentService);
  private userService = inject(UserService);
  constructor(private router: Router){}
  employeList: any = [];
  loadingProgress = true;

  appointmentInfo = {
    date:null,
    heure:null,
    employe:null,
    ispayed:null,
    customer: localStorage.getItem('_id') || ''
  }

  ngOnInit(): void {
    let id = localStorage.getItem('_id') || ''
    this.loadHistorique(id);
    this.notificationService.requestForNotification().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
    this.loadEmploye();
  }

  loadEmploye(){
    this.userService.getUsersByPrivilege("EMPLOYEE").subscribe({
      next: (employees:any)=>{
        this.employeList = employees;
      },
      error: (error) => console.log('Error fetching employee',error)
    })
  }

  loadHistorique(id:string){
    this.appointmentService.getHistorique(id).subscribe({
      next: (appointments:any)=>{
        this.appoitmentList = appointments;
        this.loadingProgress = false;
      },
      error: (error) => console.log('Error fetching appointment',error)
    });
  }

  payedAppointement(id:string){
    this.appointmentService.payedAppointment(id).subscribe({
      next: (appointment:any)=>{
        this.loadHistorique(appointment.customer);
      },
      error : (error) => console.log('Error in paying the appointment',error)
    });
  }

  detailAppointment(appointment:any){
    this.router.navigate(['rendez-vous/historique',appointment._id]);
    //this.router.navigate(['rendez-vous/detail']);
  }
  
  calculateSommeService(appointment:any):number{
    return appointment.services.reduce((total:number, service:any) => total + service.price, 0);
  }

  searchAppointment(){
    this.loadingProgress = true;
    console.log(this.appointmentInfo)
    this.appointmentService.searchAppointment(this.appointmentInfo).subscribe({
      next: (appointments:any)=>{
        this.appoitmentList = appointments;
        this.appointmentInfo = {
          date:null,
          customer: localStorage.getItem('_id') || '',
          heure:null,
          employe:null,
          ispayed:null
        }
        this.loadingProgress = false;
      },
      error: (error) => console.log('Error fetching appointment',error)
    });
  }

}
