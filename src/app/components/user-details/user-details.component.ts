import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:any;
  posts:any;
  constructor(private activateRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
   this.activateRoute.params.subscribe((params)=>{
        this.userService.getUserViaRest(+params['id']).subscribe(
          user=>this.user=user,
          err=>console.log('Error while fetching the user details',err),
          ()=>alert("The user data fechted successfully")
          )
      })
  }

  create(){
   this.user.id=null;
   this.userService.createUser(this.user).subscribe(
    user=>alert(`a new user is create with the id : ${user.id}`),
    err=>alert(`Got an error as : ${err}`),
    ()=>alert(`creation of the user completed !`)
   )
  }

  update(){
    this.user.name='sachin gawade'
    this.user.email='sachin@gmail.com'
    this.userService.updateUser(this.user).subscribe(
      user=>{alert(`a user is update  `)
          console.log(user);
          this.user=user;
    },
      err=>alert(`Got an error as : ${err}`),
      ()=>alert(`creation of the user completed !`)
     )
  }

  deleteUser(){
     this.userService.deleteUser(this.user.id).subscribe(
       user=>alert(`the user : ${user.id} deleted successfully`),
       err=>alert("Error while deleting the user "),
       ()=>alert("User deletion operation completed"))
     }    
  

  getUserPosts(){
    this.userService.getUserPosts(this.user.id).subscribe(
      post=>this.posts=post,
      err=>alert("Error while getting the user posts"))
     
    }

    showPosts(){
      console.log(this.posts);
    }


}
