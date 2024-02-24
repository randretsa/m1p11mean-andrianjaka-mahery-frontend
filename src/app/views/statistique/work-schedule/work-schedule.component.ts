import { Component, OnInit, inject } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrl: './work-schedule.component.scss'
})
export class WorkScheduleComponent implements OnInit{

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
          backgroundColor: '#21C6DA',
          data: this.data
        }
      ]
    }
  }

  loadDataMonth(){
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.appointmentService.getEmployeScheduleByMonth().subscribe({
      next: (datas:any)=>{
        this.data = datas;
        this.loadChart();
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  loadDataDay(){
    this.labels = ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']
    this.appointmentService.getEmployeScheduleByWeek().subscribe({
      next: (datas:any)=>{
        this.data = datas;
        this.loadChart();
      },
      error: (error) => console.log('Error fetching services',error)
    });
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
