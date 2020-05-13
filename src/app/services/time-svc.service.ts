import { Injectable } from '@angular/core';
import { DataSVCService } from './data-svc.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeSVCService extends DataSVCService{
  constructor(http:HttpClient){
    super('http://worldtimeapi.org/api/timezone/Europe/London',http)
  }
  getGMT(){
    console.log('[timnesvc] hit server');
    let obj
    let today =new Date();
    
  this.getAll().subscribe(response => {
    obj = response;
    console.log(Date.parse(obj.datetime))
  })
  return new Date(new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getHours()-4,today.getMinutes()-30,today.getSeconds()));
  }
}
