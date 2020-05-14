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
      setTimeout(() => {
        resolve(this.r)
      }, 3000);
      // setTimeout(() => {
      //   reject(new Error('Could not retrieve routes'));  
      // }, 2000);
      
    })
    return p;
  }
  constructor() { }
}
interface route{
  id:any;
  name:string;
}
