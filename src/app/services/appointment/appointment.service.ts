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
}
