import { Component, OnInit, inject } from '@angular/core';
import { AppointmentService } from '../../../services/appointment/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss'
})
export class HistoriqueComponent implements OnInit{

  appoitmentList: any = [];

  private appointmentService = inject(AppointmentService);
  constructor(private router: Router){}

  ngOnInit(): void {
    let id = localStorage.getItem('_id') || ''
    this.loadHistorique(id);
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
