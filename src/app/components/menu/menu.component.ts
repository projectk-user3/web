import { Component, OnInit } from '@angular/core';

import { AppConstants } from '../../constants/config.constants';

import { SuperAdminViews } from '../../constants/super-admin-views.config';
import { ClientViews } from '../../constants/client-views.config';
import { UserViews } from '../../constants/user-views.config';
import { CommonViews } from '../../constants/common-views.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  loginTypeviews = [];
  commonViews = [];
  loginType = '';

  constructor(private _router: Router) { }

  ngOnInit() {
    this.loginType = localStorage.getItem('loginType').toLowerCase();
    const permissions = JSON.parse(localStorage.getItem('parseResponseData')).permissions;
    if (this.loginType === AppConstants.admin) {
      this.loginTypeviews = SuperAdminViews;
    } else if (this.loginType === AppConstants.client) {
      this.loginTypeviews = ClientViews;
    } else if (this.loginType === AppConstants.user) {
      this.loginTypeviews = UserViews;
    } else {
      this.loginTypeviews = UserViews;
    }
    for (let i = 0; i < permissions.length; i++) {
      for (let j = 0; j < this.loginTypeviews.length; j++) {
        if (this.loginTypeviews[j].tag.toLowerCase() === permissions[i].toLowerCase()) {
          this.loginTypeviews[j].show = true;
          break;
        }
      }
    }
    this.commonViews = CommonViews;
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

}
