import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  genders!:string[];
  communicationModes!:string[];
  constructor() { }

  ngOnInit(): void {
    this.genders=['male','female','other'];
    this.communicationModes=['phone','email']
  }

  submitForm(tempVar:any){
    console.log('Form submitted ',tempVar)
  }

}
