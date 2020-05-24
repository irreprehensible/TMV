import { Component, OnInit } from '@angular/core';
import { TimeSVCService } from 'src/app/services/time-svc.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time:Date//="--:--:--"
  timeSVC:TimeSVCService;
  constructor( private _time:TimeSVCService) {
    this.timeSVC = _time;
  }
   
  ngOnInit(): void {
    //  this.setTime(this.timeSVC.getGMT(),function() {
    //    console.log('[]');
    //  });
    // this.timeSVC.getGMT(function(today){
    //   console.log('[callback]',today)
    //   this.setTime(today)
    // })
    this.timeSVC.getGMT().then(today => this.setTime(today)).catch(err => throwError(err))
  }
  public setTime(today) {
    let timeNow = new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getHours(),today.getMinutes(),today.getSeconds())
    let int = setInterval(() => {
      if((timeNow.getMinutes() - today.getMinutes()) >=7){
        clearInterval(int);
        this.timeSVC.getGMT().then(today => this.setTime(today));
      }
      else{
        timeNow.setSeconds(timeNow.getSeconds()+1); 
        // let h = this.checkTime(timeNow.getHours());
        // let m = this.checkTime(timeNow.getMinutes());
        // let s = this.checkTime(timeNow.getSeconds());
        this.time = timeNow;//`${timeNow.toLocaleDateString()} ${h}:${m}:${s}`;   
      }
    }, 1000);
  }
  private checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
}
