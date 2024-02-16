import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, GridModule, TableModule } from '@coreui/angular';

@Component({
  selector: 'app-tache',
  standalone: true,
  imports: [CommonModule,
    CardModule,ButtonModule,
    TableModule,GridModule],
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.scss'
})
export class TacheComponent {

}
