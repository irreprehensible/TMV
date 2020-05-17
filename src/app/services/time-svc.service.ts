import { Injectable } from '@angular/core';
import { DataSVCService } from './data-svc.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class TimeSVCService extends DataSVCService{
  constructor(http:HttpClient){
    super('https://worldtimeapi.org/api/timezone/Europe/London',http)
  }
  getGMT(){
    console.log('[timnesvc] hit server');
    let obj
    const p = new Promise((resolve,reject)=>{
      this.getAll().subscribe(response => {
        obj = response;
        // console.log(obj.datetime.split('T')[1].split('.')[0])
        let y = obj.datetime.split('T')[0].split('-')[0];
        let m = Number(obj.datetime.split('T')[0].split('-')[1])-1
        let d =obj.datetime.split('T')[0].split('-')[2]
        let hh = obj.datetime.split('T')[1].split('.')[0].split(':')[0]
        let mm = obj.datetime.split('T')[1].split('.')[0].split(':')[1]
        let ss = obj.datetime.split('T')[1].split('.')[0].split(':')[2]
        let da = new Date(y,m,d,hh,mm,ss)
        console.log(da)
        resolve(da)
      },err=>{
        reject(new Error(err))
      })
    });
    return p;
  //return today; //new Date(new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getHours()-4,today.getMinutes()-30,today.getSeconds()));
  }
}
