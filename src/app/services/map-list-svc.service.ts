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
     
      return this.m;
  }
  constructor() { }
}
interface map{
  id:number;
  name:string;
  desc?:string;
}
