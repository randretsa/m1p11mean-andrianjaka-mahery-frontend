import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';

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
        path: ':by',
        component: ReservationComponent,
        data: {
          title: 'Reservation'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiqueRoutingModule {
}
