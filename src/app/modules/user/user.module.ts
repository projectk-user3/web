import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {
  DashboardComponent, SearchByIdComponent, SearchByBasicComponent, SearchByAdvancedComponent,
  SearchByAstrologyComponent, SearchByDistanceComponent, SearchByCalendarComponent, SearchByKeywordComponent,
  SearchByD3jsComponent, NewsComponent, MyProfileComponent
} from './user-index';

import { MainComponent, HeaderComponent, FooterComponent, MenuComponent, AboutUsComponent, ContactUsComponent } from '../components-index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MyProfileComponent,
    NewsComponent,
    AboutUsComponent,
    ContactUsComponent
  ]
})
export class UserModule { }
