import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';
import { FormServiceComponent } from './form-service/form-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, PopoverModule, SharedModule, TableModule, TooltipModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ServicesRoutingModule,
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
    FormsModule,
    TableModule,
    ModalModule,PopoverModule,
    TooltipModule
  ],
  declarations: [
    FormServiceComponent,
    ListServiceComponent
  ],
})
export class ServicesModule {
  
}
