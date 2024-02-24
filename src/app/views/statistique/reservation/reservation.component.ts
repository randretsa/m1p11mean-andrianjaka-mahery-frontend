import { Component, OnInit, inject } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit{

  by = "mois"
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  data = [0]
  private appointmentService = inject(AppointmentService);

  chart = {
    labels: this.labels,
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: this.data
      }
    ]
  };

  ngOnInit(): void {
    this.loadDataMonth();
  }

  loadChart(){
    this.chart = {
      labels: this.labels,
      datasets: [
        {
          label: 'Valeur',
          backgroundColor: '#f87979',
          data: this.data
        }
      ]
    }
  }

  loadDataMonth(){
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.appointmentService.getAppointmentByMonth().subscribe({
      next: (datas:any)=>{
        this.data = datas;
        this.loadChart();
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  loadDataDay(){
    this.labels = ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']
    this.data = [78, 65]
    this.loadChart();
  }

  changeBy() {
    if (this.by == "jour") {
      this.loadDataDay();
    } else {
      this.loadDataMonth();
    }
  }

}
