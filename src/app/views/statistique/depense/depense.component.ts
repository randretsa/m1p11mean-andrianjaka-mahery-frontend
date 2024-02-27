import { Component, OnInit, inject } from '@angular/core';
import { DepenseService } from '../../../services/depense/depense.service';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrl: './depense.component.scss'
})
export class DepenseComponent implements OnInit{

  private depenseService = inject(DepenseService);
  depenseList: any = [];

  depenseInfo = {
    name:null,
    price:null
  }

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
    console.log(this.depenseInfo);
    this.depenseInfo = {
      name:null,
      price:null
    }
  }

}
