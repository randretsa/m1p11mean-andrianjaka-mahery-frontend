import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';
import { ServicesService } from '../../../services/services/services.service';
import { FormsModule } from '@angular/forms';
import { ListServiceComponent } from '../list-service/list-service.component';

@Component({
  selector: 'app-form-service',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    FormsModule],
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
  private serviceService = inject(ServicesService);

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef:MatDialogRef<FormServiceComponent>){

  }

  ngOnInit(): void {
      
  }

  createService(){
    this.serviceService.createService(this.serviceInfo).subscribe({
      next: (service:any)=>{
        console.log(service);
      },
      error: (error) => console.log('Error creating service',error)
    });
  }

}
