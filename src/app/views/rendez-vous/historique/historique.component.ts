import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, GridModule, TableModule } from '@coreui/angular';
import { AppointmentService } from '../../../services/appointment/appointment.service';

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

  ngOnInit(): void {
      this.loadHistorique("65cf0215fde74e4157207b35");
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

}
