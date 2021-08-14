import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/signup';

@Injectable({
    providedIn: 'root'
})

export class SignupService {
    id: any;

    constructor(private http: HttpClient) { }

    create(data: any): Observable<any> {
        return this.http.post(baseUrl, data);
    }

}