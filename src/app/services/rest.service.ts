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
      console.error('Client Side issue:: ' + errorResponse.message);
    } else {
      console.error('Server Side issue:: ' + errorResponse.message);
    }
    return throwError(errorResponse);
  }

  getHttpHeaders(serviceUrl) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Accept', 'application/json');
    httpHeaders.set('Content-Type', 'application/json');
    if (serviceUrl !== AppConstants.loginEndPoint) {
      httpHeaders.set('Authorization', 'Bearer' + localStorage.getItem('loginUser'));
    } else {
      httpHeaders.set('loginId', localStorage.getItem('loginId'));
      httpHeaders.set('password', localStorage.getItem('password'));
    }
    return httpHeaders;
  }

  httpGetServiceCall(serviceUrl) {
    if (AppConstants.useMockData) {
      const restURL = 'assets/mockData' + serviceUrl;
      return this._httpClient.get(`${restURL}.json`).pipe(map(res => res), catchError(this._handleError));
    }
    return this._httpClient.get(`${this.baseJsonServerUrl + '/' + serviceUrl}`, { headers: this.getHttpHeaders(serviceUrl) })
      .pipe(map(res => res), catchError(this._handleError));
  }
}
