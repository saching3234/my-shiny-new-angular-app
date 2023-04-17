import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MyserviceService]
})
export class HomeComponent implements OnInit,OnChanges ,OnDestroy {   
  txtName:string="sachin";
constructor(){
  console.log("Home component constructor is called")
}
  ngOnChanges(changes: SimpleChanges): void {
     console.log("Home components ng On changes method called "+changes);
  }
  ngOnDestroy(): void {
    console.log("Home components ngOnDestroy method called")
  }
  ngOnInit(): void {
    console.log("Home controller ngOnInit method called");
  }


  

}




