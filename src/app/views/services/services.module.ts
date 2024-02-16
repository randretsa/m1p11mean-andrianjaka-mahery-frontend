import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '@coreui/angular';
import { ListServiceComponent } from './list-service/list-service.component';
import { FormServiceComponent } from './form-service/form-service.component';
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

@NgModule({
  declarations: [
    ListServiceComponent,FormServiceComponent
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
    ListGroupModule
  ],
})
export class ServicesModule {
  
}
