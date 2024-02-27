import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  baseUrl = "http://localhost:3500"
  endpointURL = this.baseUrl+"/depenses";

  private http = inject(HttpClient)

  getDepenses(){
    return this.http.get(this.endpointURL);
  }

  createDepense(newDepense:any){
    return this.http.post<any>(this.endpointURL, newDepense);
  }

  constructor() { }
}
