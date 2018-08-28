import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../services/authguard/auth-guard.service';
import {
  DashboardComponent, SearchByIdComponent, SearchByBasicComponent, SearchByAdvancedComponent,
  SearchByAstrologyComponent, SearchByDistanceComponent, SearchByCalendarComponent, SearchByKeywordComponent,
  SearchByD3jsComponent, NewsComponent, MyAccountComponent
} from './index';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MainComponent } from '../../components/main/main.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
      { path: 'search-by-id', component: SearchByIdComponent, canActivate: [AuthGuardService] },
      { path: 'search-by-basic', component: SearchByBasicComponent, canActivate: [AuthGuardService] },
      { path: 'search-by-advanced', component: SearchByAdvancedComponent, canActivate: [AuthGuardService] },
      { path: 'search-by-astrology', component: SearchByAstrologyComponent, canActivate: [AuthGuardService] },
      { path: 'search-by-distance', component: SearchByDistanceComponent, canActivate: [AuthGuardService] },
      { path: 'search-by-calendar', component: SearchByCalendarComponent, canActivate: [AuthGuardService] },
      { path: 'search-by-keyword', component: SearchByKeywordComponent, canActivate: [AuthGuardService] },
      { path: 'search-by-D3Js', component: SearchByD3jsComponent, canActivate: [AuthGuardService] },
      { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuardService] },
      { path: 'news', component: NewsComponent, canActivate: [AuthGuardService] },
      // { path: 'contact-us', component: DashboardComponent, canActivate: [AuthGuardService] },
      // { path: 'about-us', component: DashboardComponent, canActivate: [AuthGuardService] },
      { path: '**', redirectTo: 'dashboard' },
    ]
  }
];

export const UserRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
