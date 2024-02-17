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

  createService(newService:any){
    return this.http.post<any>(this.endpointURL, newService);
  }

  updateService(id:string,newService:any){
    return this.http.put(this.endpointURL+"/"+id,newService);
  }

  getServiceById(id:string){
    return this.http.get(this.endpointURL+"/"+id);
  }

}