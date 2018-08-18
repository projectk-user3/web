import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ManageProfilesComponent } from './manage-profiles/manage-profiles.component';
import { MainComponent } from './main/main.component';

let defaultRoute: any = 'dashboard';
if (sessionStorage.getItem('admin-view')) {
  const adminView = JSON.parse(sessionStorage.getItem('admin-view'));
  defaultRoute = adminView.tag;
} else {
  defaultRoute = 'dashboard';
}

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: defaultRoute },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'search', component: SearchComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: 'manage-profiles', component: ManageProfilesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
