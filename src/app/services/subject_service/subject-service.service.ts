import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
private _prop:string='foo';

public propChanged:BehaviorSubject<string>=new BehaviorSubject<string>(this._prop);
//setter
setProp(prop:string):void{
  //pushing the value
  this._prop=prop;
  this.propChanged.next(this._prop);
}

//getter
getProp():string{
  return this._prop;
}
}
