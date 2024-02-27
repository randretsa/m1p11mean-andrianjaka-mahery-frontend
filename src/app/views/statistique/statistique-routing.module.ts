import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import {SalesVolumeComponent} from './sales-volume/sales-volume.component'
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { DepenseComponent } from './depense/depense.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Statistique'
    },
    children: [
      {
        path: 'reservation',
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
      },
      {
        path: 'work-schedule',
        component: WorkScheduleComponent,
        data: {
          title: 'Horaire Employe'
        }
      },
      {
        path: 'depense',
        component: DepenseComponent,
        data: {
          title: 'Depense'
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
