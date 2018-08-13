import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from '../../services/constants.config';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  email: any = '';
  forgotType = '';
  sentMsg = '';
  resetPwd = '';

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.forgotType = this._activatedRoute.snapshot.paramMap.get('type');
    if (this._activatedRoute.snapshot.paramMap.get('type').toLowerCase() === 'username') {
      this.forgotType = AppConstants.usernameForgotMsg;
      this.sentMsg = AppConstants.usernameSentMsg;
      this.resetPwd = '';
    } else {
      this.forgotType = AppConstants.passwordForgotMsg;
      this.sentMsg = AppConstants.passwordResetMsg;
      this.resetPwd = 'Reset your password';
    }
  }

  ngOnInit() {
  }

  onReset() {
    alert('Mail sent to ' + this.email);
    this._router.navigate(['login']);
  }
}
