import { Component, OnInit } from '@angular/core';

import { AppConstants } from '../../constants/config.constants';

import { SuperAdminViews } from '../../constants/super-admin-views.config';
import { ClientViews } from '../../constants/client-views.config';
import { UserViews } from '../../constants/user-views.config';
import { CommonViews } from '../../constants/common-views.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  views = [];
  loginType = '';

  constructor() { }

  ngOnInit() {
    this.loginType = localStorage.getItem('loginType').toLowerCase();
    if (this.loginType === AppConstants.admin) {
      this.views = SuperAdminViews;
    } else if (this.loginType === AppConstants.client) {
      this.views = ClientViews;
    } else if (this.loginType === AppConstants.user) {
      this.views = UserViews;
    } else {
      this.views = UserViews;
    }
    this.views.push(CommonViews);
  }

}
