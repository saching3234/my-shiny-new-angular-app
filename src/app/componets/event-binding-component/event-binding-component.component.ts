import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-component',
  templateUrl: './event-binding-component.component.html',
  styleUrls: ['./event-binding-component.component.css']
})
export class EventBindingComponentComponent implements OnInit {
animal: any='🐪';


  constructor() { }

  ngOnInit(): void {
  }
  //key up event handler method
  onKeyUp(ev:any){
  ev.code==="Enter"&&alert("Enter was clicke");
  }

  showMessage(){
    alert("Button is clicked");
  }



}
