import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = "http://localhost:3500"
  endpointURL = this.baseUrl+"/services";

  private http = inject(HttpClient)

  getAllServices(){
    return this.http.get(this.endpointURL);
  }

  deleteService(id:string){
    return this.http.delete(this.endpointURL+"/"+id);
  }

  /*post(newService:any){
    return;
  }*/

}