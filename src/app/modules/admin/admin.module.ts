import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ManageProfilesComponent } from './manage-profiles/manage-profiles.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent, DashboardComponent, SearchComponent, MyAccountComponent, ManageProfilesComponent]
})
export class AdminModule { }
