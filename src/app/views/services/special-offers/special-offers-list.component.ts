import {Component, OnInit, inject} from '@angular/core';
import { SpecialOfferService } from 'src/app/services/services/specialOffer.service';

@Component({
    templateUrl: 'special-offers-list.component.html',
})
export class SpecialOfferListComponent implements OnInit{
    specialOfferService: SpecialOfferService = inject(SpecialOfferService); 
    specialOffers: any;
    
    constructor(){}

    ngOnInit(): void {
        this.specialOfferService.getSpecialOffers().subscribe(
            data => this.specialOffers = data
        );    
    }
}