import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotComponent } from './components/login/forgot/forgot.component';

import { ErrorLogService } from './services/log/error-log.service';
import { GlobalErrorHandlerService } from './services/error-handling/global-error-handler.service';
import { AuthGuardService } from './services/authguard/auth-guard.service';

import { RestrictInputDirective } from './directives/validation/restrict-input.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    RestrictInputDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ErrorLogService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalErrorHandlerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
