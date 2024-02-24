import { NgModule } from '@angular/core';
import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, PopoverModule, SharedModule, TableModule, TooltipModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrendreRdvComponent } from './prendre-rdv/prendre-rdv.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { DetailTacheComponent } from './detail-tache/detail-tache.component';
import { TacheComponent } from './tache/tache.component';

@NgModule({
  imports: [
    RendezVousRoutingModule,
    CommonModule,
    MatDialogModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    DropdownModule,
    ListGroupModule,
    FormsModule,
    TableModule,
    ModalModule,
    ReactiveFormsModule
  ],
  declarations: [
    PrendreRdvComponent,
    HistoriqueComponent,
    DetailComponent,
    ListeComponent,
    DetailTacheComponent,
    TacheComponent
  ],
})
export class RendezVousModule {
  
}
