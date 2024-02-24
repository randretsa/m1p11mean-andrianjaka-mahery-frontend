import { Component, OnInit, inject } from '@angular/core';
import { AppointmentService } from '../../../services/appointment/appointment.service';
import { Router, NavigationExtras } from '@angular/router';
import { NotificationService } from 'src/app/services/notifications/notification.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss'
})
export class HistoriqueComponent implements OnInit{

  appoitmentList: any = [];
  notificationService: NotificationService = inject(NotificationService);
  private appointmentService = inject(AppointmentService);
  constructor(private router: Router){}

  ngOnInit(): void {
    let id = localStorage.getItem('_id') || ''
    this.loadHistorique(id);
    this.notificationService.requestForNotification().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  loadHistorique(id:string){
    this.appointmentService.getHistorique(id).subscribe({
      next: (appointments:any)=>{
        this.appoitmentList = appointments;
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

}
