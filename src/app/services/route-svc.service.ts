import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteSVCService {
  r:route []=[
    {id:'r1',name:'LON-BIR'},
    {id:'r2',name:'LON-BOS'},
    {id:'r3',name:'SUS-LEI'},
    {id:'r4',name:'TEXT'},
    {id:'r5',name:'route 5'},
  ]; 
  getRouteList(){
    const p:Promise<route[]> = new Promise((resolve, reject) =>{
      resolve(this.r)
      //reject(new Error('Could not retrieve trains'));
    })
    return p;
  }
  constructor() { }
}
interface route{
  id:any;
  name:string;
}
