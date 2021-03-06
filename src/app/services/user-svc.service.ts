import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSVCService {
 user:user = {
   avatar:'../assets/user.gif',
   firstname:'Saud',
   lastname:'Khan',
   role:'admin'
 }
 getUser(){
   const p:Promise<user> = new Promise((resolve, reject)=>{
     resolve(this.user);
    //  reject(new Error('user no found'))
   })
   return p;
 }
 getUserOptionList(){
   return [{id:1,name:'options'},{id:2,name:'opty'},{id:3,name:'openy'}]
 }
  constructor() { }
}

export interface user{
  userid?:any
  avatar:string;
  firstname:string;
  lastname:string;
  role:string;
  roleid?:any;
}

