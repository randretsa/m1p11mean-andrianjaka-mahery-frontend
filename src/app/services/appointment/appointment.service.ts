import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  baseUrl = "http://localhost:3500"
  endpointURL = this.baseUrl+"/appointments";

  private http = inject(HttpClient)

  getHistorique(id:string){
    return this.http.get(this.endpointURL+"/historique/"+id);
  }

  getAppoitmentList(id:string){
    return this.http.get(this.endpointURL+"/list/"+id);
  }

  payedAppointment(id:string){
    return this.http.patch(this.endpointURL+"/payed/"+id,null);
  }

  getAppointmentById(id:string){
    return this.http.get(this.endpointURL+"/"+id);
  }

  getTaskCommission(id:string){
    return this.http.get(this.endpointURL+"/task/"+id);
  }

  createAppointment(appointment:any){
    return this.http.post<any>(this.endpointURL,appointment);
  }

  getAppointmentByMonth(){
    return this.http.get(this.endpointURL+"/stat/reservation");
  }

  getAppointmentByWeek(){
    return this.http.get(this.endpointURL+"/stat/reservation/jour");
  }

  getEmployeScheduleByMonth(){
    return this.http.get(this.endpointURL+"/stat/schedule");
  }

  getEmployeScheduleByWeek(){
    return this.http.get(this.endpointURL+"/stat/schedule/jour");
  }

  searchAppointment(appointment:any){
    return this.http.post(this.endpointURL+"/search",appointment);
  }
}
