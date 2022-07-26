import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkinslotsService {

  
  invocation = new XMLHttpRequest();
  url='http://localhost:8080/api';
  constructor(private http: HttpClient) { }


  GetParkingSlotByParking(_idParking: number):Observable<any>
  {
    return this.http.get<ParkingSlot>(this.url+'/parkingslot/getSlotsbyParking/'+_idParking);
  }
}
export interface ParkingSlot{
  idparkingslot:string;
  idparking:string;
  idtypevehicle:string;
  number:string;
  preferentialslot:string;
  state:string;
}