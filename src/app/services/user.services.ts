import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    private _url: string = 'http://localhost:3500/users';

    constructor(private http: HttpClient){}

    getUsers(): Observable<IUser[]>{
        return this.http.get<IUser[]> (this._url);
    }

    register(userData: any){
        return this.http.post<any>(this._url, userData);
    }

    login(userData: any){
        return this.http.post<any>(this._url+'/login', userData);
    }
}