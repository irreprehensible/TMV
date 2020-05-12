import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

export class DataSVCService {
  constructor(private url:string,private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url)
      .pipe(retry(1))
      .pipe(catchError(this.errorHandle));
  }

  private errorHandle(error: Response){
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 400) {
      //return throwError(new BadInput(error.json()));
    }
    return throwError(new AppError(error));
  }
}
