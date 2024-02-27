import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  endpointURL = environment.apiUrl+"preferences";

  private http = inject(HttpClient)

  constructor() { }

  getCustomerPreferences(id:string){
    return this.http.get(this.endpointURL+"/"+id);
  }

  createPreferences(newPreference:any){
    return this.http.post<any>(this.endpointURL, newPreference);
  }

  updateService(id:string,newPreference:any){
    return this.http.put(this.endpointURL+"/"+id,newPreference);
  }

}
