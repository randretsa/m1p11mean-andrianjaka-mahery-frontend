import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
@Injectable({
    providedIn: 'root'
})
export class StatsService {
    
    private _url: string = environment.apiUrl+'stats/';
    
    private headers = new HttpHeaders({
        'Authorization': localStorage.getItem('token') || ''
      });
    constructor(private http: HttpClient){}

    getSalesVolumeByMonth(): Observable<any[]>{
        return this.http.get<any> (this._url+"sales-volume");
    }

    getDailySalesVolume(): Observable<any[]>{
        return this.http.get<any> (this._url+"daily-sales-volume");
    }
}