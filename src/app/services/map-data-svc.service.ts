import { Injectable,NgZone } from '@angular/core';
import { SseSVCService } from './sse-svc.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapDataService {

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

  closeServer(url:string):void{
    const eventSource = this._sseService.getEventSource(url);
    console.log('[closing server]',url)
    eventSource.close();
  }
}
