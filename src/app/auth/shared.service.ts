import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


// Files Import 



@Injectable()
export class SharedService {
    // private subject = new Subject<any>();

    token: string;
    private baseUrl: string = environment.apiUrl + environment.version;
    private getAuthToken() {
        const storageValues = JSON.parse(localStorage.getItem('access_token'));
        if (storageValues != null) {
            return storageValues.Authorization;
        } else {
            return '';
        }
    }
    constructor(private http: HttpClient, private router: Router) {
    }
    /**
     * @param url -> URL
     */
    isLoggedIn(url: string): boolean {
        var storageValues = JSON.parse(localStorage.getItem("access_token"));


        // var usertype = localStorage.getItem("user Type")
  
            if (storageValues !== null && storageValues !== "") {
                if (url === "/" || url === "/login" ||  url === "/admin"
                    || url === "/forgot-password" || url === "/reset-password") {
                    this.router.navigate(["/admin/dashboard"]);
                    return false;
                } else {
                    return true;
                }
            } else {
                if (url !== "/") {
                    this.router.navigate(["/"]);
                    return false;
                } else {
                    return true;
                }
            }
        } 

    // admin signin  
    signin(data) {
        return this.http.post(`${this.baseUrl}account/login`, data).pipe(
            map(user => {
                return user;
            })
        );
    }

   // admin forgot password  
    forgotPassword(data) {
        return this.http.post(`${this.baseUrl}account/forgot_password`, data).pipe(
            map(user => {
                return user;
            })
        );
    }


        // reset password 
    resetpassword(data) {
        return this.http
            .post(`${this.baseUrl}account/reset_password`, data)
            .pipe(
                map(user => {
                    return user;
                })
            );
    }


    cleanerlist() {
        var authToken = this.getAuthToken();
        return this.http
            .get(`${this.baseUrl}cleaner/retrieve`).pipe(
            map((response: any) => {
                return response;
            })
            );
    }

    customerlist() {
        var authToken = this.getAuthToken();
        return this.http
            .get(`${this.baseUrl}customer/retrieve`).pipe(
                map((response: any) => {
                    return response;
                })
            );
    }

   

}
