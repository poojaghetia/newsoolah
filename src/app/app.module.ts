import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { ValidatorsService } from './shared/validators.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { NgSelectModule } from '@ng-select/ng-select';
import { RoutingGuard } from './auth/routing.guard';
import { InterceptService } from './auth/intercept.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './auth/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
   
  ],
  providers: [ValidatorsService,SharedService,RoutingGuard, 
    {   
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
