import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MinValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url='https://jsonplaceholder.typicode.com/users';
  private _posturl='https://jsonplaceholder.typicode.com/posts';
 private _users: IUser[] = [];

  constructor(private http:HttpClient) { }

  //returns the all users
  getUsers(){   
    console.log(this._users);
    return this._users;
  }

   //get users by rest
  getUsersViaRest():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url);    
  }

  //get user by rest
  getUserViaRest(id:any):Observable<IUser>{
    let headers=new HttpHeaders().set('Authorization','Your bearer tocken');
    return this.http.get<IUser>(`${this._url}/${id}`,{headers})
  }


  //return the matched user only
  findById(uid:any){
    //this.getUserViaRest();
  //return this._users.filter(user=>user.id===uid)[0];
  }

  createUser(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(this._url,user);
  }


  updateUser(user:IUser):Observable<IUser>{
   return this.http.put<IUser>(`${this._url}/${user.id}`,user);
  }

  deleteUser(id:number):Observable<IUser>{
    return this.http.delete<IUser>(`${this._url}/${id}`);
  }
  
  getUserPosts(id:number):Observable<any>{
   let params=new HttpParams().set('userId',id.toString());
   return this.http.get<any>(this._posturl,{params});       
  }
}
