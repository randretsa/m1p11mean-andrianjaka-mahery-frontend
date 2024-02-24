import { Component, OnInit, inject } from '@angular/core';
import {StatsService} from '../../../services/stats/stat.services'
import { FormBuilder } from '@angular/forms';
import { result, thru } from 'lodash-es';
@Component({
  selector: 'app-reservation',
  templateUrl: './sales-volume.component.html',
})
export class SalesVolumeComponent implements OnInit{

  //States management
  statsService: StatsService = inject(StatsService);
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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

  // Form Management
  filterForm = this.formBuilder.group({
    criteria: ['mois'],
    year: ['2024'],
});

// Listeners
onFilterChange(){
  const criteria = this.filterForm.value;
  this.getMonthly(criteria.year);
}

loadChart(labels: any, data: any){
this.chart = {
  labels: labels,
  datasets: [
    {
      label: 'GitHub Commits',
      backgroundColor: '#f87979',
      data: data
    }
  ]
};
}

getMonthly(year: string | any){
  this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  this.statsService.getSalesVolumeByMonth().subscribe(
    results => {
      for (let index = 0; index < results.length; index++) {
        if(results[index].year == year) this.data[results[index].month-1] = results[index].totalServicesPrice;
      }

      this.loadChart(this.labels, this.data);
    }
  );
}
  // Loading data for the stats
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.getMonthly("2024");
  }
}
