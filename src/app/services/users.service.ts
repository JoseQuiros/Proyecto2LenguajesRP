import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  getUsers():Observable<any>
  {
    return this.http.get<Users>(this.url+'/user/getAllUsers');
  }

  getUsersById(id: string):Observable<any>
  {
    return this.http.get(this.url+'/user/getUser/'+id);
  }

  saveUser(users: Users):Observable<any>
  {
    return this.http.post(this.url+'/user/saveUser', users);
  }

  editUser(id:string, users: Users):Observable<any>
  {
    return this.http.put(this.url+'/user/'+id, users);
  }

  deleteUser(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/user/'+id);
  }

  getRols():Observable<any>
  {
    return this.http.get<rol>(this.url+'/rol/getAllRoles');
  }
}


export interface Users{
  iduser:string;
  idrol:string;
  name:string;
  dni:string;
  age:string;
  telephone:string;
  email:string;
  clave:string;
  state:string;
}
export interface rol{
  
  idrol:string;
  name:string;
  authority:string;
}