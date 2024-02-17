import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, GridModule, TableModule } from '@coreui/angular';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule,
    CardModule,ButtonModule,
    TableModule,GridModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

}
