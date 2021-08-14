import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/genre';

@Injectable()
export class GenreService {

    constructor(private http: HttpClient) { }

    genre :any;

    get(genre:any) {
        return this.http.get(`${baseUrl}/${genre}`);
    }

}