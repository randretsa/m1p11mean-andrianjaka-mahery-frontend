import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrendreRdvComponent } from './prendre-rdv/prendre-rdv.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { TacheComponent } from './tache/tache.component';
import { DetailTacheComponent } from './detail-tache/detail-tache.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Rendez-vous'
    },
    children: [
      {
        path: 'prendre',
        component: PrendreRdvComponent,
        data: {
          title: 'Prendre'
        }
      },
      {
        path: 'historique',
        data: {
          title: 'Historique'
        },
        children: [
          {
            path: '',  
            component: HistoriqueComponent,
            data: {
              title: 'Historique'
            }
          },
          {
            path: ':id',  
            component: DetailComponent,
            data: {
              title: 'Historique / Détail'
            }
          },
        ]
      },
      {
        path: 'list',
        data: {
          title: 'Liste'
        },
        children: [
          {
            path: '',  
            component: ListeComponent,
            data: {
              title: 'Liste'
            }
          }
        ]
      },
      {
        path: 'task',
        data: {
          title: 'Taches & Commissions'
        },
        children: [
          {
            path: '',  
            component: TacheComponent,
            data: {
              title: 'Taches & Commissions'
            }
          }
        ]
      },
      {
        path: ':act/detail/:id',
        component: DetailTacheComponent,
        data: {
          title: 'Détail rendez-vous'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule {
}
