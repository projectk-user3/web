import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {
  UserDashboardComponent, UserSearchByIdComponent, UserSearchByBasicComponent, UserSearchByAdvancedComponent,
  UserSearchByAstrologyComponent, UserSearchByDistanceComponent, UserSearchByCalendarComponent, UserSearchByKeywordComponent,
  UserSearchByD3jsComponent, UserNewsComponent, UserMyAccountComponent, MainComponent, HeaderComponent, FooterComponent,
  MenuComponent, SettingsComponent
} from './user.index';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingsComponent,
    UserDashboardComponent,
    UserSearchByIdComponent,
    UserSearchByBasicComponent,
    UserSearchByAdvancedComponent,
    UserSearchByAstrologyComponent,
    UserSearchByDistanceComponent,
    UserSearchByCalendarComponent,
    UserSearchByKeywordComponent,
    UserSearchByD3jsComponent,
    UserMyAccountComponent,
    UserNewsComponent]
})
export class UserModule { }
