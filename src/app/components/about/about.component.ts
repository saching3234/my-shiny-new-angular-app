import { Component, HostListener, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';
import { Myservice2Service } from 'src/app/services/myservice2.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
 // providers:[Myservice2Service]
})
export class AboutComponent implements OnInit {
s:any;
myName:String="";
isDis:boolean=true;
prop:string="";
colorName="red";
students=["sachin","shital","nana"];
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
  this.myName="sachin gawade"
  }

  enableTextBox(){
    this.isDis?this.isDis=false:this.isDis=true
    
  }

  @HostListener("click")
  clickListener()
  {
     alert("Host listener called")
  }
 
  saveData(){
    this.s=prompt("ENter you name");
  this.myservice.saveArr(this.s);
  }

  getData(){
   console.log(this.myservice.getArr())
  }
}
