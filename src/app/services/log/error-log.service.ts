import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorConstants } from '../../constants/config.constants';

@Injectable()
export class ErrorLogService {
  constructor() { }
  logError(error: any) {
    // Returns a date converted to a string using Universal Coordinated Time (UTC).
    const date = new Date().toUTCString();

    if (error instanceof HttpErrorResponse) {
      // The response body may contain clues as to what went wrong,
      console.error(
        date,
        ErrorConstants.httpError,
        error.message,
        'Status code:',
        (<HttpErrorResponse>error).status
      );
    } else if (error instanceof TypeError) {
      console.error(date, ErrorConstants.typeError, error.message, error.stack);
    } else if (error instanceof Error) {
      console.error(
        date,
        ErrorConstants.generalError,
        error.message,
        error.stack
      );
    } else if (error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(date, ErrorConstants.generalError, error.message);
    } else {
      console.error(
        date,
        ErrorConstants.somethingHappened,
        error.message,
        error.stack
      );
    }
  }
}
