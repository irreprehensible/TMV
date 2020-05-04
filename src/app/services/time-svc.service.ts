import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSVCService {
  getGMT(){
    console.log('[timnesvc] hit server');
    return new Date();
  }
  constructor() { }
}
