import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { AppConstants } from '../services/constants.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  isError: boolean;
  isServerSideError: boolean;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private _restService: RestService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
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
        data => {
          this.isServerSideError = false;
          if (data) {
            console.log('Success');
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
