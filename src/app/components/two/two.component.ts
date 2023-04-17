import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectServiceService } from 'src/app/services/subject_service/subject-service.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
prop:string='';
  private subscription!: Subscription;
  constructor(private subjectSer:SubjectServiceService) { }

  ngOnInit(): void {
   this.subscription= this.subjectSer.propChanged.subscribe(prop=>this.prop=prop);
  }

  changeProp(){
    this.subjectSer.setProp("bar");
    
  }

  ngOnDestroy(){
    //behavior subject is the never ending subject so we need to unsunscribe when the component gets destroyed
    this.subscription.unsubscribe();
    console.log("destroy method called of the two components")
  }
}
