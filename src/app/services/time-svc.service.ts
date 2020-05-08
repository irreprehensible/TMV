import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSVCService {
  getGMT(){
    console.log('[timnesvc] hit server');
    let today =new Date();
    return new Date(new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getHours()-4,today.getMinutes()-30,today.getSeconds()));
  }
}
