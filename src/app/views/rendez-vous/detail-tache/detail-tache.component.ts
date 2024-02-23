import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, GridModule, TableModule } from '@coreui/angular';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Service } from 'src/app/models/services.model';

@Component({
  selector: 'app-detail-tache',
  templateUrl: './detail-tache.component.html',
  styleUrl: './detail-tache.component.scss'
})
export class DetailTacheComponent {

  services:Service[] = []
  sommeService = 0
  sommeCommission = 0
  act = ""
  route: ActivatedRoute = inject(ActivatedRoute);
  private appointmentService = inject(AppointmentService);

  ngOnInit(): void {
    this.loadAppointment();
  }

  loadAppointment(): void{
    this.act = this.route.snapshot.params['act']
    this.appointmentService.getAppointmentById(this.route.snapshot.params['id']).subscribe({
      next: (appointment:any)=>{
        this.services = appointment.services;
        this.sommeService = this.calculateSommeService();
        this.sommeCommission = this.calculateSommeCommission();
      },
      error: (error) => console.log('Error fetching appointment',error)
    })
  }

  calculateSommeService():number{
    return this.services.reduce((total:number, service:any) => total + service.price, 0);
  }

  calculateSommeCommission():number{
    return this.services.reduce((total:number, service:any) => total + (service.price*service.commission)/100, 0);
  }

}
