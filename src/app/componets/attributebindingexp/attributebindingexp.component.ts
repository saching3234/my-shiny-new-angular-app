import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebindingexp',
  templateUrl: './attributebindingexp.component.html',
  styleUrls: ['./attributebindingexp.component.css']
})
export class AttributebindingexpComponent implements OnInit {
  actionName="Attribute example";
  numbers=[1,2]
  constructor() { }

  ngOnInit(): void {
  }

}
