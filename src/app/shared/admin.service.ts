// Package Import 
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';

// Files Import 
import { environment } from './../../environments/environment';


@Injectable()
export class AdminService {
    // private subject = new Subject<any>();

    token: string;
    private baseUrl: string = environment.apiUrl + environment.version;
    private getAuthToken() {
        const storageValues = JSON.parse(localStorage.getItem('adminuser'));
        if (storageValues != null) {
            return storageValues.Authorization;
        } else {
            return '';
        }
    }
    constructor(private http: HttpClient) {
    }
    /**
     * @param url -> URL
     */


    //country api
    getCountryData() {
        return this.http.get<any>("../../assets/data/countryData.json").pipe(
            map(data => {
                return data;
            })
        );
    }



    //country list 
    countrylist() {
        return this.http.get(`${this.baseUrl}admin/countries`).pipe(
            map((admin: any) => {
                return admin;
            })
        );
    }




}