import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { AppConstants } from '../../services/constants.config';

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
            // if (data.usertype.toLowercase() === AppConstants.adminType) {
            //   this._router.navigate(['login']);
            // } else if (data.usertype.toLowercase() === AppConstants.clientType) {
            //   this._router.navigate(['login']);
            // } else if (data.usertype.toLowercase() === AppConstants.brokerType) {
            //   this._router.navigate(['login']);
            // } else {
            //   this._router.navigate(['login']);
            // }
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
