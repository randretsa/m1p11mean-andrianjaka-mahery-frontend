import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { ServicesService } from 'src/app/services/services/services.service';
import { UserService } from 'src/app/services/user.services';
import { PreferencesService } from 'src/app/services/preferences/preferences.service';
import { FormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/services/notifications/notification.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [CommonModule,
    CardModule, GridModule,FormModule,ButtonModule,MatProgressSpinnerModule,
    FormsModule],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss'
})
export class PreferencesComponent implements OnInit{
  notificationService: NotificationService = inject(NotificationService);
  serviceList: any = [];
  employeList: any = [];
  loadingProgress = false;
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
    this.notificationService.requestForNotification().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
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
    this.loadingProgress = true;
    this.preferenceService.createPreferences(this.preference).subscribe({
      next: (preference:any)=>{
        console.log("create"+preference);
        this.loadingProgress = false;
        this.loadPage();
      },
      error: (error) => console.log('Error creating preferences',error)
    });
  }

  updatePreferences(id:string){
    this.loadingProgress =true;
    this.preferenceService.updateService(id,this.preference).subscribe({
      next: (preference:any)=>{
        console.log("update"+preference);
        this.loadingProgress = false;
        this.loadPage();
      },
      error: (error) => console.log('Error creating preferences',error)
    })
  }

}
