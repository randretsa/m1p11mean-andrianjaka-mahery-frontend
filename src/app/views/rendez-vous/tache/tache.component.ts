import { Component, OnInit, inject } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.scss'
})
export class TacheComponent implements OnInit{

  appoitmentList: any = [];
  sommeCommission = 0
  loadingProgress = true;
  private appointmentService = inject(AppointmentService);
  constructor(private router: Router){}

  ngOnInit(): void {
    let id = localStorage.getItem('_id') || ''
    this.loadAppointmentList(id);
  }

  loadAppointmentList(id:string){
    this.appointmentService.getTaskCommission(id).subscribe({
      next: (appointments:any)=>{
        this.appoitmentList = appointments;
        this.sommeCommission = this.calculateSommeCommission();
        this.loadingProgress = false;
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  detailTask(appointment:any){
    this.router.navigate(['rendez-vous/task/detail',appointment._id]);
  }
  
  calculateSommeCommission():number{
    let somme = 0
    for(let i=0;i<this.appoitmentList.length;i++){
      somme += this.appoitmentList[i].services.reduce((total:number, service:any) => total + (service.price*service.commission)/100, 0);
    }
    return somme;
  }

  calculateCommission(appointment:any){
    return appointment.services.reduce((total:number, service:any) => total + (service.price*service.commission)/100, 0);
  }

}
