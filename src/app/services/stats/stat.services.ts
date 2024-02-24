import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StatsService {
    
    private _url: string = 'http://localhost:3500/stats/sales-volume';
    
    private headers = new HttpHeaders({
        'Authorization': localStorage.getItem('token') || ''
      });
    constructor(private http: HttpClient){}

    getSalesVolumeByMonth(): Observable<any[]>{
        return this.http.get<any> (this._url);
    }
}