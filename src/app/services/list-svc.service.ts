import { Injectable } from '@angular/core';
import { throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class ListSVCService {
  private l:location[]=[
    {id:1,name:'location1'},
    {id:2,name:'location2'},
    {id:3,name:'location3'},
    {id:4,name:'location4'}
  ]
  constructor(private _http:HttpClient) { }
  getRegions(){
    return this._http.get('assets/regions.json')
      .pipe(retry(1),catchError(err => this.errorHandle(err)))
  }
  getLocationList(){
    const p:Promise<location[]> = new Promise((resolve, reject) =>{
      resolve(this.l)
      //reject(new Error('Could not retrieve locations')); //try Apperror
    })
    return p;
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
export interface location{
  id:any,
  name:string
}
