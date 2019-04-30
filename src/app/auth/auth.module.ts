import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from "@ng-select/ng-select";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FotgotPasswordComponent } from './fotgot-password/fotgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRoutes),
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgSelectModule 
    ],
    
    declarations: [

        LoginComponent,
        FotgotPasswordComponent,
        ResetPasswordComponent,

     
    ]
})
export class AuthModule { }