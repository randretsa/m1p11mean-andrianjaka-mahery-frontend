import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServiceComponent } from './list-service/list-service.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Rendez-vous'
    },
    children: [
      {
        path: '',
        component: ListServiceComponent,
        data: {
          title: 'List'
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
