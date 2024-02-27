import { NgModule } from '@angular/core';
import { StatistiqueRoutingModule } from './statistique-routing.module';
import { CommonModule } from '@angular/common';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { ButtonModule, CardModule, FormModule, GridModule, TableModule } from '@coreui/angular';
import { ReservationComponent } from './reservation/reservation.component';
import { SalesVolumeComponent } from './sales-volume/sales-volume.component';
import { FormsModule } from '@angular/forms';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepenseComponent } from './depense/depense.component';
import { BeneficeComponent } from './benefice/benefice.component';
@NgModule({
  imports: [
    StatistiqueRoutingModule,
    CommonModule,
    ChartjsModule,
    CardModule,
    GridModule,
    FormModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule
  ],
  declarations: [
    ReservationComponent,
    SalesVolumeComponent,
    WorkScheduleComponent,
    DepenseComponent,
    BeneficeComponent
  ],
})
export class StatistiqueModule {
  
}
