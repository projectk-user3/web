import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from '../constants/config.constants';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseJsonServerUrl = AppConstants.apiEndpoint;

  constructor(private _httpClient: HttpClient) { }

  private _handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse instanceof ErrorEvent) {
      console.error('Client Side issue' + errorResponse.message);
    } else {
      console.error('Server Side issue' + errorResponse.message);
    }
    return throwError(errorResponse);
  }

  getHttpHeaders() {
    return new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
  }

  httpGetServiceCall(serviceUrl) {
    return this._httpClient.get(`${this.baseJsonServerUrl + '/' + serviceUrl}`, { headers: this.getHttpHeaders() })
      .pipe(map(res => res), catchError(this._handleError));
  }
  httpPostCall(serviceUrl, param) {
      // const url = this.config.appBaseURL + this.apiURL + serviceURL;
      ;
      return this._httpClient.post(`${this.baseJsonServerUrl + '/' + serviceUrl}`, JSON.stringify(param), { headers: this.getHttpHeaders() });
    
  }
}
