import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-demofor-input-prop-parent-child',
  templateUrl: './demofor-input-prop-parent-child.component.html',
  styleUrls: ['./demofor-input-prop-parent-child.component.css']
})
export class DemoforInputPropParentChildComponent implements OnInit {

  mydataFromPareny=["sachin ","gawade","patas"];
  constructor() { }

  ngOnInit(): void {
  }

  childClicked(){
    alert("parent event clicked")
  }
}
