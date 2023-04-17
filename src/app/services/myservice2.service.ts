import { Injectable } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn:'any'
})
export class Myservice2Service {
  name:any='';
  constructor(private myservice:MyserviceService) { }

  getName(){
   alert ("my service 3 is called")
   this.myservice.showMsg();
  }

}
