import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import {SalesVolumeComponent} from './sales-volume/sales-volume.component'
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Statistique'
    },
    children: [
      {
        path: '',
        component: ReservationComponent,
        data: {
          title: 'Reservation'
        }
      },
      {
        path: 'sales-volume',
        component: SalesVolumeComponent,
        data: {
          title: 'Chiffre d\'affaire'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiqueRoutingModule {
}
