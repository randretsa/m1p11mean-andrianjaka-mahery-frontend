import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from '../../forms/forms-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { ServicesService } from '../../../services/services/services.service';
import { UserService } from 'src/app/services/user.services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prendre-rdv',
  standalone: true,
  imports: [CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    GridModule,
    FormModule,
    ButtonModule,
    FormsModule],
  templateUrl: './prendre-rdv.component.html',
  styleUrl: './prendre-rdv.component.scss'
})
export class PrendreRdvComponent implements OnInit{

  appointmentInfo = {
    date: new Date(),
    heure: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    employe: '',
    services: [],
    rappel: 0
  }

  serviceList: any = [];
  employeList: any = [];
  private serviceService = inject(ServicesService);
  private userService = inject(UserService);

  ngOnInit(): void {
    this.loadServices();
    this.loadEmploye();
  }

  loadServices(){
    this.serviceService.getAllServices().subscribe({
      next: (services:any)=>{
        this.serviceList = services;
        console.log(services);
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  loadEmploye(){
    this.userService.getUsersByPrivilege("EMPLOYEE").subscribe({
      next: (employees:any)=>{
        this.employeList = employees;
        console.log(employees);
      },
      error: (error) => console.log('Error fetching employee',error)
    })
  }

}
