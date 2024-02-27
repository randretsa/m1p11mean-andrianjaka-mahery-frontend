import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  endpointURL = environment.apiUrl+"depenses";

  private http = inject(HttpClient)

  getDepenses(){
    return this.http.get(this.endpointURL);
  }

  createDepense(newDepense:any){
    return this.http.post<any>(this.endpointURL, newDepense);
  }

  constructor() { }
}
