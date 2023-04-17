import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:IUser[]=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsersViaRest().subscribe(user=>this.users=user)
  }

}
