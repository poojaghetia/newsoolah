// Package Import 
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from '../layouts/full/full.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    RouterModule,
    NgbModule


  ],
  exports: [
    FullComponent,
    HeaderNavigationComponent,
    BreadcrumbComponent,
    SidebarComponent

  ],
  declarations: [
    HeaderNavigationComponent,
    BreadcrumbComponent, SidebarComponent,
    FullComponent
  ],

})
export class SharedModule { }
