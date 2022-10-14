import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './empinfo/employee';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';
import { RtsecurityService } from './rtsecurity.service';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RtrestclientService {
  hosturl = 'http://hr.napescoapi.net/hrapi/';
  private handleError: HandleError;

  constructor(
      private http: HttpClient, private rtsecurity: RtsecurityService,
      httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('HRCLIENT');
  }

  /** GET Realestate Plans from the server */
  getEmp(empid:Number): Observable<Employee[]> {
    const url=this.hosturl.concat("getemp/").concat(empid.toString());
      return this.http.get<Employee[]>(url)
          .pipe(
              catchError(this.handleError('getEmpInfo', []))
          );
  }

}