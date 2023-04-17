import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userForm=new FormGroup({
     name: new FormControl('sachin',[
     Validators.required,
     Validators.minLength(6),
     Validators.maxLength(20)
     ]
     ),
     username: new FormControl('sachin32'),
     email: new FormControl('sachin@gmail.com'),
     phone: new FormControl('7020498612'),
     website: new FormControl('sachin.com'),
     address: new FormGroup({
      street: new FormControl('patas'),
      Suite: new FormControl('daund'),
      city: new FormControl('pune'),
      zipcode: new FormControl('412219'),
      geo: new FormGroup({           
          lat: new FormControl('12.3345'),
          lng: new FormControl('-23.878'),
      }) 
    }), 

      company:new FormGroup({         
        name: new FormControl('sachinit'),
        catchphrase: new FormControl('life is beautiful'),
        bs: new FormControl('abc'),
      })
     });
  }
 
  get name(){
    return this.userForm.get('name');
  }
  
  submit(){

  }



}
