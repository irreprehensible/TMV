import { Injectable } from '@angular/core';
//import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MapListSvcService {
  m:map [] =[
    {id:1,name:'map1',desc:'map1 descrio'},
    {id:2,name:'map2',desc:'map2 descrio'},
    {id:3,name:'map3',desc:'map3 descrio'}
  ]
  getMapList(){
    const p:Promise<map[]> = new Promise((resolve, reject) =>{
      resolve(this.m)
      //reject(new Error('Could not retrieve trains'));
    })
    return p;
  }
  getMapById(id){
//    return this.m[id-1]
    const p:Promise<map> = new Promise((resolve, reject) =>{
      resolve(this.m[id-1]) // this isnt correct
      //reject(new Error('Could not retrieve trains'));
    })
    return p;
  }
  constructor() { }
}
export interface map{
  id:number;
  name:string;
  desc?:string;
}
