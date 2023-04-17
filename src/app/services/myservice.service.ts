import { Injectable } from '@angular/core';
import { Myservice2Service } from './myservice2.service';

@Injectable({
  providedIn: 'any'
})
export class MyserviceService {
   private arr:any=[];

  constructor() {
    
   }
    
   saveArr(s:string){
    this.arr.push(s);
   } 
   getArr(){
    return this.arr;
   }


  showMsg(){
    alert("My service is called thank you")
    
  }

}
