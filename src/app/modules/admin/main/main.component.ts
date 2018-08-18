import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  childViews = [];
  selectedView: any;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.childViews = [
      {
        tag: 'dashboard',
        name: 'Dashboard'
      }, {
        tag: 'search',
        name: 'Search'
      }, {
        tag: 'my-account',
        name: 'My Account'
      }, {
        tag: 'manage-profiles',
        name: 'Manage Profiles'
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

  logout() {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }
}
