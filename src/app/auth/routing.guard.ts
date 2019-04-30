"use strict";
// Package Import 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Files Import 
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable()
export class RoutingGuard implements CanActivate {
  constructor(
    private sharedservice:SharedService,
    public router:Router    
  ) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
    return this.sharedservice.isLoggedIn(state.url);
 
  }

  canActivateChild(next:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    return this.canActivate(next,state);
  }
}
