import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorLogService } from './error-log.service';

@Injectable()
export class GlobalErrorHandlerService implements HttpInterceptor {
  constructor(private _errorLogService: ErrorLogService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          // if (err instanceof HttpErrorResponse) {
          // do error handling here
          this._errorLogService.logError(err);
          //   alert();
          // fs.writeFile('assets/log/log.txt', 'Hey there!', function(error) {
          //   if (error) {
          //     return console.log(error);
          //   }
          //   console.log('The file was saved!');
          // });
          // }
        }
      )
    );
  }
}
