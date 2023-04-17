import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from 'src/app/services/subject_service/subject-service.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  prop:string=''
  constructor(private subjectSer:SubjectServiceService) { }

 
  ngOnInit(): void {
    this.subjectSer.propChanged.subscribe(prop=>this.prop=prop);
   }


}
