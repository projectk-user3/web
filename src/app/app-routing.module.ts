import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login/login.component';
import { ForgotComponent } from './components/login/forgot/forgot.component';

import { AuthGuardService } from './services/authguard/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot/:type', component: ForgotComponent },
  { path: 'user', loadChildren: './modules/user/user.module#UserModule', canActivate: [AuthGuardService] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
