import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from '../../forms/forms-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { ServicesService } from '../../../services/services/services.service';

@Component({
  selector: 'app-prendre-rdv',
  standalone: true,
  imports: [CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    GridModule,
    FormModule,
    ButtonModule],
  templateUrl: './prendre-rdv.component.html',
  styleUrl: './prendre-rdv.component.scss'
})
export class PrendreRdvComponent implements OnInit{

  serviceList: any = [];
  private serviceService = inject(ServicesService);

  ngOnInit(): void {
    this.loadServices();
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

}
