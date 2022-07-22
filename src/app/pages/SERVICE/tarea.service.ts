import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url='http://localhost:8080/api/user';
  constructor(private http: HttpClient) { }

  getTareas():Observable<any>
  {
    return this.http.get<Tarea>(this.url+'/getAllUsers');
  }

  getUnaTarea(id: string):Observable<any>
  {
    return this.http.get(this.url+'/getUser/'+id);
  }

  saveTarea(tarea: Tarea):Observable<any>
  {
    return this.http.post(this.url+'/saveUser', tarea);
  }

  editTarea(id:string, tarea: Tarea):Observable<any>
  {
    return this.http.put(this.url+'/'+id, tarea);
  }

  deleteTarea(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface Tarea{
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