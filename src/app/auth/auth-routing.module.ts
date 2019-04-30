import { Routes } from '@angular/router';


import { RoutingGuard } from './routing.guard';
import { LoginComponent } from './login/login.component';
import { FotgotPasswordComponent } from './fotgot-password/fotgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: "",
                component: LoginComponent,
                canActivate: [RoutingGuard]
            },
            {
                path: "login",
                component: LoginComponent,
                canActivate: [RoutingGuard],      
            },
            {
                path: "forgot-password",
                component: FotgotPasswordComponent,
                data: {
                    title: 'Forgot Password',
                    urls: [
                        { title: 'Forgot Password', url: '/forgot-password' },
                    ]
                }
                // canActivate: [RoutingGuard]
            },
            {
                path: "reset-password/:token",
                component: ResetPasswordComponent,
                data: {
                    title: 'Reset Password',
                    urls: [
                        { title: 'Reset Password', url: '/reset-password/:token' },
                    ]
                }
                // canActivate: [RoutingGuard]
            },
          
          
          
        ]
    }
];
