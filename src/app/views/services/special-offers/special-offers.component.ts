import {Component, OnInit, inject} from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import {SpecialOfferService} from '../../../services/services/specialOffer.service'
import { ServicesService } from 'src/app/services/services/services.service';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'special-offers.component.html',
})
export class SpecialOfferComponent implements OnInit{
    // States 
    specialOfferService = inject(SpecialOfferService);
    serviceService = inject(ServicesService);

    specialOfferForm = this.formBuilder.group({
        offerName: [''],
        offerPrice: [''],
        services: this.formBuilder.array([]),
    });

    simple_services: any;

    get services(){
        return this.specialOfferForm.get('services') as FormArray;
    }
    //Listeners
    onCreate(){
        const value = this.specialOfferForm.value;
        const postData = {
            offerName: value.offerName,
            offerPrice:value.offerPrice,
            services: value.services?.map((service: any) =>{ return service.service_id})
        }
        this.specialOfferService.saveSpecialOffer(postData).subscribe(
            data => {
                console.log(data);
                this.router.navigate(['/services/special-list']);
            },
            err => console.log(err)
        );
    } 
    constructor(private formBuilder: FormBuilder, private router: Router){}

    ngOnInit(): void {
        this.serviceService.getAllServices().subscribe(
            data => {
                this.simple_services = data;
                for (let index = 0; index < this.simple_services.length; index++) {
                    this.services.push(this.formBuilder.group({
                        service_id: this.simple_services[index]._id
                    }));
                }
            } 
        );
            
    }


}