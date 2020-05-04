import { Component, OnInit } from '@angular/core';
import { TimeSVCService } from 'src/app/services/time-svc.service';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time:string
  timeSVC:TimeSVCService;
  constructor( private _time:TimeSVCService) {
    this.timeSVC = _time;
  
   }
   checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  ngOnInit(): void {
     this.setTime(this.timeSVC.getGMT());
  }
  setTime(today) {
    let timeNow = new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getHours(),today.getMinutes(),today.getSeconds())
    let int = setInterval(() => {
      if((timeNow.getMinutes() - today.getMinutes()) >=5){
        clearInterval(int);
        this.setTime(this.timeSVC.getGMT());
      }
      else{
        timeNow.setSeconds(timeNow.getSeconds()+1); 
        let h = this.checkTime(timeNow.getHours());
        let m = this.checkTime(timeNow.getMinutes());
        let s = this.checkTime(timeNow.getSeconds());
        this.time = h + ":" + m + ":" + s;   
      }
    }, 1000);
  }
}
