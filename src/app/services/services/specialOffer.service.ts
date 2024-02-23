import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SpecialOfferService {

    private _url: string = 'http://localhost:3500/special-offers';
    
    private headers = new HttpHeaders({
        'Authorization': localStorage.getItem('token') || ''
      });
    constructor(private http: HttpClient){}

    saveSpecialOffer(special: any){
        return this.http.post(this._url, special, {headers: this.headers});
    }

    getSpecialOffers() {
        return this.http.get<any[]>(this._url);
    }

}