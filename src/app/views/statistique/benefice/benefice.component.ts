import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from 'src/app/services/stats/stat.services';

@Component({
  selector: 'app-benefice',
  templateUrl: './benefice.component.html',
  styleUrl: './benefice.component.scss'
})
export class BeneficeComponent {
  loadingProgress = true;
  //States management
  statsService: StatsService = inject(StatsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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

  // Form Management
  filterForm = this.formBuilder.group({
    criteria: ['mois'],
    year: ['2024'],
});
// Listeners
onFilterChange(){
  const criteria = this.filterForm.value;
  if(criteria.criteria=="mois"){
    this.getMonthly(criteria.year);
  }else{
    this.getDaily(criteria.year)
  }
}

loadChart(labels: any, data: any){
this.chart = {
  labels: labels,
  datasets: [
    {
      label: 'Chiffre d\'affaires',
      backgroundColor: '#21DA3A',
      data: data
    }
  ]
};
}

getMonthly(year: string | any){
  this.loadingProgress = true;
  const somme = this.route.snapshot.params['somme']
  this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  this.labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  this.statsService.getSalesVolumeByMonth().subscribe(
    results => {
      for (let index = 0; index < results.length; index++) {
        if(results[index].year == year) this.data[results[index].month-1] = results[index].totalServicesPrice - somme;
      }

      this.loadChart(this.labels, this.data);
      this.loadingProgress = false;
    }
  );
}
  // Loading data for the stats
getDaily(year: string | any){
  this.loadingProgress = true;
  this.data = [0, 0, 0, 0, 0, 0, 0]
  this.labels = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  this.statsService.getDailySalesVolume().subscribe(
    results => {
      for (let index = 0; index < results.length; index++) {
        if(results[index].year == year) this.data[results[index].dayOfWeek-1] = results[index].totalServicesPrice;
      }

      this.loadChart(this.labels, this.data);
      this.loadingProgress = false;
    }
  );
}
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.getMonthly("2024");
  }

}
