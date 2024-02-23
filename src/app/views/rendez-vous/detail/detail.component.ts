import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, GridModule, TableModule } from '@coreui/angular';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../../services/appointment/appointment.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{

  constructor(){}

  appointment:any
  sommeService = 0
  route: ActivatedRoute = inject(ActivatedRoute);
  private appointmentService = inject(AppointmentService);

  ngOnInit(): void {
    this.loadAppointment();
  }

  loadAppointment(){
    this.appointmentService.getAppointmentById(this.route.snapshot.params['id']).subscribe({
      next: (appointment:any)=>{
        this.appointment = appointment;
        this.sommeService = this.calculateSommeService();
      },
      error: (error) => console.log('Error fetching appointment',error)
    })
  }

  calculateSommeService():number{
    return this.appointment.services.reduce((total:number, service:any) => total + service.price, 0);
  }

}
