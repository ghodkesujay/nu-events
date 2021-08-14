import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
const baseUrl = 'http://localhost:8080/api/';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) { }


    userlogin(loginData: any): Observable<any> {
        return this.http.post(`${baseUrl}login`, loginData);
    }

    adminlogin(loginData: any): Observable<any> {
        return this.http.post(`${baseUrl}login`, loginData);
    }

}