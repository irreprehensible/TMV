import { Injectable,NgZone } from '@angular/core';
import { SseSVCService } from './sse-svc.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private _zone:NgZone,private _sseService: SseSVCService) {  }

  getServerSentEvent(url:string){
    return Observable.create(observer =>{
      const eventSource = this._sseService.getEventSource(url);
      
      eventSource.onopen = event =>{
        this._zone.run(() => {
          observer.next(event);
        })
      }

      eventSource.onmessage = event => {
        this._zone.run(() => {
          observer.next(event);
        })
      }

      eventSource.onerror = error =>{
        this._zone.run(()=>{
          observer.next(error);
        })
      }
    })
  }
}
