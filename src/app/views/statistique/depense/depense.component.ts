import { Component, OnInit, inject } from '@angular/core';
import { DepenseService } from '../../../services/depense/depense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrl: './depense.component.scss'
})
export class DepenseComponent implements OnInit{

  private depenseService = inject(DepenseService);
  depenseList: any = [];
  depenseTab: any = [];

  depenseInfo = {
    name:null,
    price:null
  }
  constructor(private router: Router){}

  loadDepenses(){
    this.depenseService.getDepenses().subscribe({
      next: (depenses:any)=>{
        this.depenseList = depenses;
      },
      error: (error) => console.log('Error fetching depenses',error)
    });
  }

  ngOnInit(): void {
    this.loadDepenses();
  }

  addDepense(){
    this.depenseTab.push(this.depenseInfo);
    this.depenseInfo = {
      name:null,
      price:null
    }
  }

  calculeDepense(){
    let somme = 0
    for(let i=0;i<this.depenseTab.length;i++){
      somme += this.depenseTab[i].price
    }
    return somme;
  }

  removeDepense(id:number){
    this.depenseTab.splice(id,1)
  }

  estimer(){
    this.router.navigate(['statistique/depense/benefice',this.calculeDepense()]);
  }

}
