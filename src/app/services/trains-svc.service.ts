import { Injectable } from '@angular/core';
import { DataSVCService } from './data-svc.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainsSVCService extends DataSVCService{
  t:train []=[
    {id:'t1',name:'train 1'},
    {id:'t2',name:'train 2'},
    {id:'t3',name:'train 3'},
    {id:'t4',name:'train 4'},
    {id:'t5',name:'train 5'},
    {id:'t6',name:'train 6'},
    {id:'t7',name:'train 7'},
    {id:'t8',name:'train 8'},
    {id:'t9',name:'train 9'},
  ]; 
  getTrainList():Promise<train[]>{
    const p:Promise<train[]> = new Promise((resolve, reject) =>{
      resolve(this.t)
      // reject(new Error('Could not retrieve trains'));
    })
    return p;
  }
  constructor(http:HttpClient) { 
    super('',http)
  }
}
interface train{
  id:any;
  name:string
}