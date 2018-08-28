import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../services/authguard/auth-guard.service';
import {
  UserDashboardComponent, UserSearchByIdComponent, UserSearchByBasicComponent, UserSearchByAdvancedComponent,
  UserSearchByAstrologyComponent, UserSearchByDistanceComponent, UserSearchByCalendarComponent, UserSearchByKeywordComponent,
  UserSearchByD3jsComponent, UserNewsComponent, UserMyAccountComponent
} from './user.index';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MainComponent } from '../../components/main/main.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'user-dashboard' },
      { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuardService] },
      { path: 'user-search-by-id', component: UserSearchByIdComponent, canActivate: [AuthGuardService] },
      { path: 'user-search-by-basic', component: UserSearchByBasicComponent, canActivate: [AuthGuardService] },
      { path: 'user-search-by-advanced', component: UserSearchByAdvancedComponent, canActivate: [AuthGuardService] },
      { path: 'user-search-by-astrology', component: UserSearchByAstrologyComponent, canActivate: [AuthGuardService] },
      { path: 'user-search-by-distance', component: UserSearchByDistanceComponent, canActivate: [AuthGuardService] },
      { path: 'user-search-by-calendar', component: UserSearchByCalendarComponent, canActivate: [AuthGuardService] },
      { path: 'user-search-by-keyword', component: UserSearchByKeywordComponent, canActivate: [AuthGuardService] },
      { path: 'user-search-by-D3Js', component: UserSearchByD3jsComponent, canActivate: [AuthGuardService] },
      { path: 'user-my-account', component: UserMyAccountComponent, canActivate: [AuthGuardService] },
      { path: 'user-news', component: UserNewsComponent, canActivate: [AuthGuardService] },
      // { path: 'user-contact-us', component: UserDashboardComponent, canActivate: [AuthGuardService] },
      // { path: 'user-about-us', component: UserDashboardComponent, canActivate: [AuthGuardService] },
      { path: '**', redirectTo: 'user-dashboard' },
    ]
  }
];

export const UserRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
