import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './employees/user.component';
import { UsersListComponent} from './employees/users_list.component';
import {NotificationComponent} from './notifications/notification.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'coreui-icons'
      },
      {
        path: 'user-details/:id',
        component: UserDetailComponent,
        data: {
          title: 'Fiche utilisateur'
        }
      },
      {
        path: 'user-list',
        component: UsersListComponent,
        data: {
          title: 'Liste utilisateur'
        }
      }
    ]
  },
  {
    path: 'notification',
    component: NotificationComponent,
    data: {
      title: 'Notifications'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
