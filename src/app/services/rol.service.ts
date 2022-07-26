import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

getRoles():Observable<any>
{
  return this.http.get<Rol>(this.url+'/rol/getAllRoles');
}

getRolById(id: string):Observable<any>
{
  return this.http.get(this.url+'/rol/getRol/'+id);
}

saveRol(rol: Rol):Observable<any>
{
  return this.http.post(this.url+'/rol/saveRol', rol);
}

editRol(rol: Rol):Observable<any>
{
  return this.http.post(this.url+'/rol/updateRol', rol);
}

deleteRol(id:string):Observable<any>
{
  return this.http.delete(this.url+'/rol/delete/'+id);
}

}

export interface Rol{
  
  idrol:string;
  name:string;
  authority:string;
}

