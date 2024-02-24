import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './sales-volume.component.html',
})
export class SalesVolumeComponent implements OnInit{

  by = "mois"
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  data = [40, 20, 12, 39, 17, 42, 79, 14, 25, 48, 75, 49]
  chart = {
    labels: this.labels,
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#21DA3A',
        data: this.data
      }
    ]
  };

  ngOnInit(): void {
    this.loadChart()
  }

  loadChart(){
    this.chart = {
      labels: this.labels,
      datasets: [
        {
          label: 'Valeur',
          backgroundColor: '#21DA3A',
          data: this.data
        }
      ]
    }
  }

  changeBy(){
    if(this.by=="jour"){
      this.labels = ['Lundi', 'Mardi']
      this.data = [78, 65]
    } else {
      this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.data = [40, 20, 12, 39, 17, 42, 79, 14, 25, 48, 75, 49]
    }
    this.loadChart()
  }

}
