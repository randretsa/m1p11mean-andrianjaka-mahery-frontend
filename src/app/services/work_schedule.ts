import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IWorkSchedule} from '../types/work_schedule';
import { environment } from './environment';
@Injectable({
    providedIn: 'root'
})
export class WorkScheduleService {
    
    private _url: string = environment.apiUrl+'work_schedule';
    private headers = new HttpHeaders({
        'Authorization': localStorage.getItem('token') || ''
      });
    constructor(private http: HttpClient){}

    getEmployeeSchedule(employeeId: string | null): Observable<IWorkSchedule[]>{
        return this.http.get<IWorkSchedule[]>(this._url+'?employeeId='+employeeId, {headers: this.headers});
    }

    updateEmployeeSchedule(schedule: IWorkSchedule | any): Observable<IWorkSchedule[]>{
        return this.http.put<IWorkSchedule[]>(this._url,schedule,{headers: this.headers});
    }

    saveSchedule(schedule: any){
        return this.http.post<any>(this._url, schedule);
    }
}