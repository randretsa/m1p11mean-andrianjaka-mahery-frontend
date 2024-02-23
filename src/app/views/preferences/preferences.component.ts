import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { ServicesService } from 'src/app/services/services/services.service';
import { UserService } from 'src/app/services/user.services';
import { PreferencesService } from 'src/app/services/preferences/preferences.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [CommonModule,
    CardModule, GridModule,FormModule,ButtonModule,
    FormsModule],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss'
})
export class PreferencesComponent implements OnInit{

  serviceList: any = [];
  employeList: any = [];
  preference = {
    id:"",
    customer: "",
    service: '',
    serviceName: '',
    employe: '',
    employeName: '',
    isempty: true
  }
  private serviceService = inject(ServicesService);
  private userService = inject(UserService);
  private preferenceService = inject(PreferencesService);

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(){
    let id = localStorage.getItem('_id') || ''
    this.loadServices();
    this.loadEmploye();
    this.loadPreferences(id);
    this.preference.customer = id
  }

  loadServices(){
    this.serviceService.getAllServices().subscribe({
      next: (services:any)=>{
        this.serviceList = services;
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  loadEmploye(){
    this.userService.getUsersByPrivilege("EMPLOYEE").subscribe({
      next: (employees:any)=>{
        this.employeList = employees;
      },
      error: (error) => console.log('Error fetching employee',error)
    })
  }

  loadPreferences(id:string){
    this.preferenceService.getCustomerPreferences(id).subscribe({
      next: (preference:any)=>{ 
        if(preference[0]){
          this.preference.id = preference[0]._id
          this.preference.serviceName = preference[0].service.name;
          this.preference.employeName = preference[0].employe.firstName+" "+preference[0].employe.lastName;
          this.preference.isempty = false
        }
      },
      error: (error) => console.log('Error fetching employee',error)
    });
  }

  submitForm(){
    if(this.preference.isempty){
      this.createPreferences()
    } else {
      this.updatePreferences(this.preference.id);
    }
    this.loadPage();
  }

  createPreferences(){
    this.preferenceService.createPreferences(this.preference).subscribe({
      next: (preference:any)=>{
        console.log("create"+preference);
      },
      error: (error) => console.log('Error creating preferences',error)
    });
  }

  updatePreferences(id:string){
    this.preferenceService.updateService(id,this.preference).subscribe({
      next: (preference:any)=>{
        console.log("update"+preference);
      },
      error: (error) => console.log('Error creating preferences',error)
    })
  }

}
