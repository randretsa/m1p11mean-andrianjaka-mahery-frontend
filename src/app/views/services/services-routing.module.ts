import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListServiceComponent } from './list-service/list-service.component';
import { FormServiceComponent } from './form-service/form-service.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Services'
    },
    children: [
      {
        path: 'list',
        component: ListServiceComponent,
        data: {
          title: 'List'
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
