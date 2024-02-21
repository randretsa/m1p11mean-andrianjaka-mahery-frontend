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
import { IconModule } from '@coreui/icons-angular';
import { AppointmentsRoutingModule } from './appointment-routing.module';

@NgModule({
  declarations: [
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
    IconModule,
    AppointmentsRoutingModule
  ],
})
export class AppointmentsModule {
  
}
