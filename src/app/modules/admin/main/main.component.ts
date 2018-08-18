import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  childViews = [];
  navbarStatus = false;
  selectedView: any;

  constructor() { }

  ngOnInit() {
    this.childViews = [
      {
        tag: 'dashboard',
        name: 'Dashboard',
        icon: 'fa-dashboard'
      }, {
        tag: 'search',
        name: 'Search',
        icon: 'fa-search'
      }, {
        tag: 'my-account',
        name: 'My Account',
        icon: 'fa-user'
      }, {
        tag: 'manage-profiles',
        name: 'Manage Profiles',
        icon: 'fa-product-hunt'
      }
    ];
    if (sessionStorage.getItem('admin-view')) {
      this.selectedView = JSON.parse(sessionStorage.getItem('admin-view'));
    } else {
      this.selectedView = this.childViews[0];
    }

  }

  viewSelected(view) {
    sessionStorage.setItem('admin-view', JSON.stringify(view));
    this.selectedView = view;
  }

  onNavbarClicked(value) {
    this.navbarStatus = value;
  }

}
