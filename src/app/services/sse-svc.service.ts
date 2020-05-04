import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SseSVCService {
  getEventSource(url:string): EventSource{
    return new EventSource(url);
  }
}
