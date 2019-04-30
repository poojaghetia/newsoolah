import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { RoutingGuard } from './auth/routing.guard';


const routes: Routes = [
  {
    path: "",
    loadChildren: "./auth/auth.module#AuthModule",
    // canActivate: [RoutingGuard]
  },

  {
    path: "admin",
    loadChildren: "./component/user.module#UserModule",
    canActivate: [RoutingGuard]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
