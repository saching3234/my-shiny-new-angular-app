import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-shiny-new-angular-app';
  counter=0;
  classToSet='';
  name=' componet'

  onCounterChanger(buttonType:any){
    buttonType==='inc'?this.counter++:this.counter--;
    this.classToSet=this.counter>=0?'green':'red';
   console.log(buttonType)
  }

}


