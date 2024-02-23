import { NgModule } from '@angular/core';
import { StatistiqueRoutingModule } from './statistique-routing.module';
import { CommonModule } from '@angular/common';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    StatistiqueRoutingModule,
    CommonModule,
    ChartjsModule,
    CardModule,
    GridModule,
    FormModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [
    ReservationComponent
  ],
})
export class StatistiqueModule {
  
}
