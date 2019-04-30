// Package Import 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../layouts/full/full.component';
import { CleanerComponent } from './cleaner/cleaner.component';
import { CustomerComponent } from './customer/customer.component';
import { DatatableComponent } from '@swimlane/ngx-datatable';


// Files Import 




const routes: Routes = [
    {
        path: "",
        component: FullComponent,
        children: [
            // {
            //     path: "dashboard",
            //     component: CleanerComponent,
            //     data: {
            //         title: 'Dashboard',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //         ]
            //     }
            // },
            {
                path: "cleaner",
                component:CleanerComponent,
                data: {
                    title: 'Cleaner',
                    urls: [
                        { title: 'Cleaner', url: '/cleaner' },
                    ]
                }
            },
            {
                path: "datatable",
                component: DatatableComponent,
                data: {
                    title: 'Cleaner',
                    urls: [
                        { title: 'Cleaner', url: '/cleaner' },
                    ]
                }
            },
            {
                path: "customer",
                component: CustomerComponent,
                data: {
                    title: 'Customer',
                    urls: [
                        { title: 'Customer', url: '/customer' },
                    ]
                }

            }
            
           
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
