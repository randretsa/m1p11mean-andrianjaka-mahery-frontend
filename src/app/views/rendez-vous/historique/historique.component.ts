import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, GridModule, TableModule } from '@coreui/angular';
import { AppointmentService } from '../../../services/appointment/appointment.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule,
    CardModule,ButtonModule,
    TableModule,GridModule],
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
        console.log(appointments);
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
    this.router.navigate(['rendez-vous/detail',appointment._id]);
    //this.router.navigate(['rendez-vous/detail']);
  }

}
