import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, GridModule, TableModule } from '@coreui/angular';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule,
    CardModule,ButtonModule,
    TableModule,GridModule],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent implements OnInit{

  appoitmentList: any = [];

  private appointmentService = inject(AppointmentService);

  ngOnInit(): void {
    this.loadAppointmentList("65cf3b9d48bd7577b65fec3a");
  }

  loadAppointmentList(id:string){
    this.appointmentService.getAppoitmentList(id).subscribe({
      next: (appointments:any)=>{
        this.appoitmentList = appointments;
        console.log(appointments);
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

}
