import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {
  DashboardComponent, SearchByIdComponent, SearchByBasicComponent, SearchByAdvancedComponent,
  SearchByAstrologyComponent, SearchByDistanceComponent, SearchByCalendarComponent, SearchByKeywordComponent,
  SearchByD3jsComponent, NewsComponent, MyAccountComponent, MainComponent, HeaderComponent, FooterComponent,
  MenuComponent
} from './index';


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
    DashboardComponent,
    SearchByIdComponent,
    SearchByBasicComponent,
    SearchByAdvancedComponent,
    SearchByAstrologyComponent,
    SearchByDistanceComponent,
    SearchByCalendarComponent,
    SearchByKeywordComponent,
    SearchByD3jsComponent,
    MyAccountComponent,
    NewsComponent]
})
export class UserModule { }
