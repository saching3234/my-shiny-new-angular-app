
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class StringInterpolationComponent implements OnInit {
  message="String interpolation component"
  
  constructor() { }
  ngOnInit(): void {
  }
//get message method
  getMessage(){
    return this.message;
  }

}
