import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';
import { FormServiceComponent } from './form-service/form-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, PopoverModule, SharedModule, TableModule, TooltipModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SpecialOfferComponent} from './special-offers/special-offers.component'
import { IconModule } from '@coreui/icons-angular';
import { SpecialOfferListComponent } from './special-offers/special-offers-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    SpecialOfferComponent,SpecialOfferListComponent,
    FormServiceComponent,
    ListServiceComponent,
  ],
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
    TooltipModule,
    IconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
})
export class ServicesModule {
  
}
