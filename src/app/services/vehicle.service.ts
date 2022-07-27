import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getVehicles():Observable<any>
  {
    return this.http.get<Vehicle>(this.url+'/vehicle/getAllVehicles');
  }

  getVehicleById(id: string):Observable<any>
  {
    return this.http.get(this.url+'/vehicle/getVehicle/'+id);
  }
  
  saveVehicle(vehicle: Vehicle):Observable<any>
  {
    return this.http.post(this.url+'/vehicle/saveVehicle', vehicle);
  }

  editVehicle(vehicle: Vehicle):Observable<any>
  {
    return this.http.post(this.url+'/vehicle/updateVehicle', vehicle);
  }

  deleteVehicle(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/vehicle/delete/'+id);
  }

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
