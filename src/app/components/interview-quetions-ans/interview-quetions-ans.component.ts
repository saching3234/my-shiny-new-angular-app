import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-interview-quetions-ans',
  templateUrl: './interview-quetions-ans.component.html',
  styleUrls: ['./interview-quetions-ans.component.css']
})
export class InterviewQuetionsAnsComponent implements OnInit {
  arrs:any;
  constructor(private myservice:MyserviceService) { 
   
  }

  ngOnInit(): void {
    //alert("ngoninit called")
    this.arrs=this.myservice.getArr();
  }

  getData(){
   console.log(this.myservice.getArr())
  }

}
