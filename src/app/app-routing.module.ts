import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { LoancategoryComponent } from './component/loancategory/loancategory.component';
import { LoanComponent } from './component/loan/loan.component';
import { AdminComponent } from './component/admin/admin.component';
import { AuthGuard } from './auth/authentication.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'available-loans-category', component:LoancategoryComponent,canActivate:[AuthGuard]},
  {path:'loan',component:LoanComponent, canActivate:[AuthGuard]},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
