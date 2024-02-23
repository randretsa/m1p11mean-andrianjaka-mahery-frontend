import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServiceComponent } from './list-service/list-service.component';

import { FormServiceComponent } from './form-service/form-service.component';
import { SpecialOfferComponent } from './special-offers/special-offers.component';
import {SpecialOfferListComponent} from './special-offers/special-offers-list.component'
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Rendez-vous'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'coreui-icons'
      },
      {
        path: 'list',
        component: ListServiceComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'special',
        component: SpecialOfferComponent,
        data: {
          title: 'spéciale'
        }
      },
      {
        path: 'special-list',
        component: SpecialOfferListComponent,
        data: {
          title: 'spéciale'
        }
      },
      {
        path: 'form',
        component: FormServiceComponent,
        data: {
          title: 'Form'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {
}
