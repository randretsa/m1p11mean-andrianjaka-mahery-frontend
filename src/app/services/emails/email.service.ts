import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IEmail } from '../../types/email';
@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private _url: string = 'http://localhost:3500/appointments/sendEmail';
    
    private headers = new HttpHeaders({
        'Authorization': localStorage.getItem('token') || ''
      });

    constructor(private http: HttpClient){}

      sendEmail(email: IEmail){
        return this.http.post<IEmail>(this._url, email, {headers: this.headers});
      }
}
