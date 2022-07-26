import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {
  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getSlots():Observable<any>
  {
    return this.http.get<Slots>(this.url+'/parkingslot/getAllParkingslots');
  }

  getSlotsById(id: string):Observable<any>
  {
    return this.http.get(this.url+'/parkingslot/getParkingslot/'+id);
  }

  saveSlots(slots: Slots):Observable<any>
  {
    return this.http.post(this.url+'/parkingslot/saveParkingslot', slots);
  }

  editSlots(slots: Slots):Observable<any>
  {
    return this.http.post(this.url+'/parkingslot/updateParkingslot', slots);
  }

  deleteSlots(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/parkingslot/delete/'+id);
  }

  // otros
  getParkings():Observable<any>
  {
    return this.http.get<Parking>(this.url+'/parking/getAllParkings');
  }

  getTypevehicles():Observable<any>
  {
    return this.http.get<Typevehicle>(this.url+'/type/getTypes');
  }
}


export interface Slots{
  idparkingslot:string;
  idparking:string;
  idtype:string;
  number:string;
  preferentialslot:string;
  state:string;
}

export interface Parking{  
  idparking:string;
  parkingname:string;
}

export interface Typevehicle{  
  idtype:string;
  name:string;
}