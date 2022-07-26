import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  
  invocation = new XMLHttpRequest();
  url='http://localhost:8080/api';
  constructor(private http: HttpClient) { }


  getAllParkings():Observable<any>
  {
    return this.http.get<Parking>(this.url+'//parking/getAllParkings');
  }
}
export interface Parking{
  idparking:string;
  parkingname:string;
}