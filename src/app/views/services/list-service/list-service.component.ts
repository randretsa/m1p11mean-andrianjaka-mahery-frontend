import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule, CardModule, GridModule, ModalModule, PopoverModule, TableModule, TooltipModule } from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormServiceComponent } from '../form-service/form-service.component';
import { ServicesService } from '../../../services/services/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-service',
  standalone: true,
  imports: [
    CardModule,TableModule,
    GridModule,ButtonModule,
    ModalModule,PopoverModule,
    DocsComponentsModule,TooltipModule,MatDialogModule
  ],
  templateUrl: './list-service.component.html',
  styleUrl: './list-service.component.scss'
})
export class ListServiceComponent implements OnInit{

  serviceList: any = [];

  private serviceService = inject(ServicesService);

  constructor(public dialog: MatDialog/*,private sericeService: ServicesService*/){}

  ngOnInit(): void {
      /*this.sericeService.getAllServices().subscribe((services:any)=>{
        this.serviceList = services;
      });*/
      this.loadServices();
      console.log("uion");
  }

  openServiceForm(){
    const myDialogue = this.dialog.open(FormServiceComponent,{
      data: {

      }
    });
    myDialogue.afterClosed().subscribe(result=>{
      console.log(result);
    });
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
