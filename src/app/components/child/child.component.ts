import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() prop:any;
@Output() clicked=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.prop);
  }

  onClick(){
    this.clicked.emit();
  }
}
