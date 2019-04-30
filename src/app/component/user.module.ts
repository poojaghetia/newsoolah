// Package Import 
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgSelectModule } from "@ng-select/ng-select";

// Package Import 



import { TitleCasePipe } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { CleanerComponent } from './cleaner/cleaner.component';
import { CustomerComponent } from './customer/customer.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableComponent } from './data-table/data-table.component';
import { UiSwitchModule } from 'ng2-ui-switch';



@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        SharedModule,
        NgxDatatableModule,
        UiSwitchModule
    ],
    declarations: [
 CleanerComponent,
 CustomerComponent,
 DatatableComponent
//  DashboardComponent
],
    providers: [TitleCasePipe]
})
export class UserModule { }