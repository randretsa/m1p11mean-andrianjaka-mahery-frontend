import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUser} from '../types/user';
import { Observable } from 'rxjs';
import { environment } from "../services/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    private _url: string = environment.apiUrl+'users';
    
    private headers = new HttpHeaders({
        'Authorization': localStorage.getItem('token') || ''
      });
    constructor(private http: HttpClient){}

    getUsersByPrivilege(privilege: string | null): Observable<IUser[]>{
        return this.http.get<IUser[]>(this._url+'/users-privilege/'+privilege, {headers: this.headers});        
    }
    getUserById(userId: string | null): Observable<IUser>{
        return this.http.get<IUser>(this._url+'/'+userId, {headers: this.headers});
    }

    getUsers(): Observable<IUser[]>{
        return this.http.get<IUser[]> (this._url);
    }

    register(userData: any){
        return this.http.post<any>(this._url, userData);
    }

    login(userData: any){
        return this.http.post<any>(this._url+'/login', userData);
    }

    // saveUser(user: any){
    //     return this.http.post<any>(this._url, user);
    // }
    saveUser(user: any){
        return this.http.post<any>(this._url, user);
      }
    updateUser(user: any){
        return this.http.put<any>(this._url+'/'+user._id, user);
    }

    searchEmploye(employe: any){
        return this.http.post(this._url+'/search',employe);
    }
}