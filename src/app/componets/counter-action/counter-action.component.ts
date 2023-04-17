import { Component, EventEmitter,Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-counter-action',
  templateUrl: './counter-action.component.html',
  styleUrls: ['./counter-action.component.css']
})
export class CounterActionComponent implements OnInit {
  @Input() counter:number=0;
  @Output() counterChange:EventEmitter<number>=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  hadleBtn(operation:string){
    //create a event      
   operation==='inc'?this.counter++:this.counter--
   this.counterChange.emit(this.counter);   
    //console.log(evnt);
  }

}
