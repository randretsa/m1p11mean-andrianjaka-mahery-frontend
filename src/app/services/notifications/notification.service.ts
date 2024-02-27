import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private _url: string = environment.apiUrl+'notification';
    
    private headers = new HttpHeaders({
        'Authorization': localStorage.getItem('token') || ''
      });

    constructor(private http: HttpClient){}

      acceptSubscription(subscription: any){
        return this.http.post<any>(this._url, subscription, {headers: this.headers});
      }

      requestForNotification(){
        return this.http.get<any>(this._url);
      }
}
