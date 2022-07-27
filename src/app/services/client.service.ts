import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getClients():Observable<any>
  {
    return this.http.get<Client>(this.url+'/client/getAllClient');
  }

  getClientById(id: string):Observable<any>
  {
    return this.http.get(this.url+'/client/getClient/'+id);
  }
  
  saveClient(client: Client):Observable<any>
  {
    return this.http.post(this.url+'/client/saveClient', client);
  }

  editClient(client: Client):Observable<any>
  {
    return this.http.post(this.url+'/client/updateClient', client);
  }

  deleteClient(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/client/delete/'+id);
  }

  getRols():Observable<any>
  {
    return this.http.get<Rol>(this.url+'/rol/getAllRoles');
  }
}

export interface Client{
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

export interface Rol{
  
  idrol:string;
  name:string;
  authority:string;
}

export interface Vehicle{
  idvehicle:string;
  idtype:string;
  brand:string;
  model:string;
  color:string;
  year:string;
  register:string;
  description:string;
  state:string;
}

export interface Typevehicle{  
  idtype:string;
  name:string;
}
