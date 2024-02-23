import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormServiceComponent } from '../form-service/form-service.component';
import { ServicesService } from '../../../services/services/services.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrl: './list-service.component.scss'
})
export class ListServiceComponent implements OnInit{

  serviceList: any = [];

  private serviceService = inject(ServicesService);

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
      this.loadServices();
  }

  openServiceForm(action:string,id:string){
    const myDialogue = this.dialog.open(FormServiceComponent,{
      data: {
        action: action,
        serviceId: id
      }
    });
    myDialogue.afterClosed().subscribe(result=>{
      console.log(result);
      this.loadServices();
    });
  }

  loadServices(){
    this.serviceService.getAllServices().subscribe({
      next: (services:any)=>{
        this.serviceList = services;
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  deleteService(id:string){
    this.serviceService.deleteService(id).subscribe({
      next: (result:any)=>{
        console.log(result);
      },
      error: (error) => console.log('Erooorr delete',error)
    });
    this.loadServices();
  }

}
