import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8080/api/users/';

@Injectable(
    
)
export class UserService {
    id: any;
    
    constructor(private http: HttpClient) { }

    get(id:any) {
        return this.http.get(`${baseUrl}/${id}`);
    }

    getUser() {
        return this.http.get(baseUrl);
    }

    create(data: any) {
        return this.http.post(baseUrl, data);
    }
}