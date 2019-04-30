// Package Import 
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { mergeMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root"
})
export class InterceptService implements HttpInterceptor {
  public count: number = 0;
  constructor(
    public router: Router,
    private ToastrService: ToastrService
  ) { }
  /* intercept request and add token */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.count++;
    // if (this.count == 1) {
   //setTimeout(() => {
    // this.spinner.show();
  // }, 200000);
     
    // }
    return of(null).pipe(mergeMap(() => {
      if (request.url.endsWith('/account/login')
      
        || request.url.endsWith('/account/forgot_password')
      ) {
        return next.handle(request)
          .pipe(
            tap(event => {
              if (event instanceof HttpResponse) {
                // this.count--;
                // if (this.count == 0) {
                //   this.spinner.hide();
                // }
                /* http response status code */
         
            
              }
            }, error => {
              // this.count--;
              // if (this.count == 0) {
              //   this.spinner.hide();
              // }
              /* http response status code */
              
              if (error.status === 400 || error.status === 403 || error.status === 404 || error.status === 409 || error.status === 417) {                                               
                 this.errorMsg(error)            
              }           
            
              if (error.status === 500) {
                  this.router.navigate(['/admin/dashboard']);
                  this.errorMsg(error);
              }
          
              if (error.status === 0) {
                this.ToastrService.error("something wrong at server side", null, {
                  enableHtml: true,
                  timeOut: 3000,
                  messageClass: "danger",
                  toastClass: "alert alert-danger border-danger",
                  tapToDismiss: true,
                  positionClass: 'toast-top-right',
                  // closeButton:true
                });
              }
            
            })
          )
      } else {
        var storageValues = JSON.parse(localStorage.getItem('access_token'));
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer '+storageValues.Authorization
          }
        });
        return next.handle(request)
          .pipe(
            tap(event => {
              if (event instanceof HttpResponse) {
                // this.count--;
                // if (this.count == 0) {
                //   this.spinner.hide();
                // }
                /* http response status code */
              }
            }, error => {
              // this.count--;
              // if (this.count == 0) {
              //  this.spinner.hide();
              // }

              /* http response status code */
              if (error.status === 401) {
                this.router.navigate(['/']);
                localStorage.clear();
                this.errorMsg(error);
                
              }
              if (error.status === 423 || error.status === 404 || error.status === 500 || error.status === 403 || error.status === 417 ) {
                // var usertype = localStorage.getItem('user Type')
              
                this.router.navigate(['/dashboard']);
                this.errorMsg(error);
        
              }

              if (error.status === 400 || error.status === 409) { 
                this.errorMsg(error);      
    
              }          

              if (error.status === 0) {
                this.ToastrService.error("something wrong at server side", null, {
                  enableHtml: true,
                  timeOut: 3000,
                  messageClass: "danger",
                  toastClass: "alert alert-danger border-danger",
                  tapToDismiss: true,
                  positionClass: 'toast-top-right',             
                });
              }
            })
          )
      }  
    }))    
  };
  
  errorMsg(errData) {
         this.ToastrService.error(errData.error.message, null, {
                enableHtml: true,
                timeOut: 3000,
                messageClass: "danger",
           toastClass: "alert alert-danger border-danger",
                tapToDismiss: true,
                positionClass: 'toast-top-right'
            });
    }

}


