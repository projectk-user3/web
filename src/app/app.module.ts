import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { ForgotComponent } from './login/forgot/forgot.component';

import { RestrictInputDirective } from './directives/validation/restrict-input.directive';
import { ErrorLogService } from './services/error-log.service';

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalErrorHandlerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
