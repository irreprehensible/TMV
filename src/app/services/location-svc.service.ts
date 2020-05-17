import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationSVCService {
  private l:location[]=[
    {id:1,name:'location1'},
    {id:2,name:'location2'},
    {id:3,name:'location3'},
    {id:4,name:'location4'}
  ]
  getLocationList(){
    const p:Promise<location[]> = new Promise((resolve, reject) =>{
      // resolve(this.l)
      reject(new Error('Could not retrieve locations')); //try Apperror
    })
    return p;
  }
  constructor() { }
}
interface location{
  id:any,
  name:string
}
