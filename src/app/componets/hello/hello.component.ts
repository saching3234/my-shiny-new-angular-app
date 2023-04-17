import { Component, OnInit,Input, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit,OnDestroy,AfterContentInit,AfterViewInit {
 @Input() name:string | undefined;
  constructor() { 
    console.log("Constructor method called")
  }
  ngOnDestroy(): void {
    console.log('Destroy Method');
  }
  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit  Method called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit method called');
  }
  ngOnInit(): void {
    console.log("Init method called");
  }
}
