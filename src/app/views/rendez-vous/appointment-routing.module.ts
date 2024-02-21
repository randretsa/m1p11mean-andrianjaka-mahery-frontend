import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './drag_and_drop/drag-and-drop.component';
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
        component: DragAndDropComponent,
        data: {
          title: 'Liste drag and drop'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule {
}
