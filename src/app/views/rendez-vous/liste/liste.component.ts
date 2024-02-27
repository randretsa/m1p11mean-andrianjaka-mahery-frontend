import { Component, OnInit, inject } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent implements OnInit{

  appoitmentList: any = [];
  constructor(private router: Router){}
  loadingProgress = true;
  private appointmentService = inject(AppointmentService);

  ngOnInit(): void {
    let id = localStorage.getItem('_id') || ''
    this.loadAppointmentList(id);
  }

  loadAppointmentList(id:string){
    this.appointmentService.getAppoitmentList(id).subscribe({
      next: (appointments:any)=>{
        this.appoitmentList = appointments;
        this.loadingProgress = false;
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  detailList(appointment:any){
    this.router.navigate(['rendez-vous/list/detail',appointment._id]);
  }

}
