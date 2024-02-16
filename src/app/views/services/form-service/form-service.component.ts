import { Component, Inject, OnInit } from '@angular/core';
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
    ListGroupModule],
  templateUrl: './form-service.component.html',
  styleUrl: './form-service.component.scss'
})
export class FormServiceComponent implements OnInit{

  name:string;
  price:number;
  duration:number;
  commission:number;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef:MatDialogRef<FormServiceComponent>){
    this.name = data.name;
    this.price = data.price;
    this.duration = data.duration;
    this.commission = data.commission;
  }

  ngOnInit(): void {
      
  }

  createService(){
    console.log(this.name)
  }

}
