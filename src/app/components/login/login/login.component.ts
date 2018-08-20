import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from '../../../constants/config.constants';
import { RestService } from '../../../services/rest.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  isError: boolean;
  isServerSideError: boolean;
  username = '';
  password = '';

  constructor(private _formBuilder: FormBuilder,
    private _router: Router, private _restService: RestService) { }

  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.isError = false;
    this.isServerSideError = false;
  }

  ngOnDestroy() {
    this.isError = false;
    this.isServerSideError = false;
  }

  onSignIn() {
    if (!this.signInForm.invalid) {
      this._restService.httpGetServiceCall(AppConstants.loginEndPoint).subscribe(
        (data: any) => {
          this.isServerSideError = false;
          if (data) {
            console.log('Success');
            sessionStorage.setItem('loginUser', JSON.stringify(data));
            if (data.usertype.toLowerCase() === AppConstants.adminType.toLowerCase()) {
              this._router.navigate(['admin']);
            } else if (data.usertype.toLowerCase() === AppConstants.clientType.toLowerCase()) {
              this._router.navigate(['client']);
            } else if (data.usertype.toLowerCase() === AppConstants.brokerType.toLowerCase()) {
              this._router.navigate(['broker']);
            } else {
              this._router.navigate(['login']);
            }
          } else {
            this.isError = true;
            console.log('Failure');
          }
        },
        error => {
          this.isError = false;
          this.isServerSideError = true;
          console.log('Server Failure');
        }
      );
    } else {
      this.isServerSideError = false;
      this.isError = true;
    }
  }
}
