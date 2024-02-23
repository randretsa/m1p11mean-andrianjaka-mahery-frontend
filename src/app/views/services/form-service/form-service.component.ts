import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from '../../../services/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrl: './form-service.component.scss'
})
export class FormServiceComponent implements OnInit{

  serviceInfo = {
    name:'',
    price:0,
    duration:0,
    commission:0
  }

  serviceId = ''

  pageInfo = {
    color: 'primary',
    label: 'Inserer',
    title: 'Ajouter un nouveau service'
  }

  action = ''
  private serviceService = inject(ServicesService);

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef:MatDialogRef<FormServiceComponent>,private router: Router){
    this.action = data.action;
    this.serviceId = data.serviceId; 
    if(this.action=='modif'){
      this.pageInfo.color='warning';
      this.pageInfo.label='Modifier';
      this.pageInfo.title='Modifier le service';
      this.loadServiceInfo(data.serviceId)
    }
  }

  ngOnInit(): void {
      
  }

  loadServiceInfo(id:string){
    this.serviceService.getServiceById(id).subscribe({
      next: (service:any)=>{
        this.serviceInfo.name = service.name,
        this.serviceInfo.price = service.price,
        this.serviceInfo.duration = service.duration,
        this.serviceInfo.commission = service.commission
      },
      error: (error) => console.log('Error getting service',error)
    });
  }

  submitForm(id:string){
    console.log(this.action);
    if(this.action=='create'){
      this.createService();
    } else if(this.action=='modif'){
      this.updateService(id);
    }
    this.router.navigateByUrl('/route-du-composant', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/service']);
    });
  }

  createService(){
    this.serviceService.createService(this.serviceInfo).subscribe({
      next: (service:any)=>{
        console.log(service);
      },
      error: (error) => console.log('Error creating service',error)
    });
  }

  updateService(id:string){
    this.serviceService.updateService(id,this.serviceInfo).subscribe({
      next: (service:any)=>{
        console.log(service);
      },
      error: (error) => console.log('Error updating service',error)
    });
  }

}
