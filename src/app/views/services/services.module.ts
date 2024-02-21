import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {SpecialOfferComponent} from './special-offers/special-offers.component'
import {ServicesRoutingModule} from './services-routing.module'
import { IconModule } from '@coreui/icons-angular';
import { SpecialOfferListComponent } from './special-offers/special-offers-list.component';

@NgModule({
  declarations: [
    SpecialOfferComponent,SpecialOfferListComponent
  ],
  imports: [
    CardModule,TableModule,
    GridModule,ButtonModule,
    CommonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    ServicesRoutingModule,
    IconModule
  ],
})
export class ServicesModule {
  
}
