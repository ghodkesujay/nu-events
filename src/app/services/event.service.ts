import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/events';

@Injectable()
export class EventService {
    id: any;
    constructor(private http: HttpClient) { }

    getEvents(): Observable<any[]> {
        return this.http.get<any>(baseUrl);
    }

    get(id: any) {
        return this.http.get(`${baseUrl}/${id}`);
    }

    // create(data) {
    //     return this.http.post(baseUrl, data);
    // }

    // update(id, data) {
    //     return this.http.put(`${baseUrl}/${id}`, data);
    // }

    // delete(id) {
    //     return this.http.delete(`${baseUrl}/${id}`);
    // }

    // deleteAll() {
    //     return this.http.delete(baseUrl);
    // }

    // findByTitle(title) {
    //     return this.http.get(`${baseUrl}?title=${title}`);
    // }

    //Sujay
    create(data: any) {
        return this.http.post(baseUrl, data);
    }

    update(id:any, data:any) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }

    delete(id:any) {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll() {
        return this.http.delete(baseUrl);
    }

    findByTitle(title:any) {
        return this.http.get(`${baseUrl}?title=${title}`);
    }

}