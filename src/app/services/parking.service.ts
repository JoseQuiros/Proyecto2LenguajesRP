import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

getParkings():Observable<any>
{
  return this.http.get<Parking>(this.url+'/parking/getAllParkings');
}

getParkingById(id: string):Observable<any>
{
  return this.http.get(this.url+'/parking/getParking/'+id);
}

saveParking(parking: Parking):Observable<any>
{
  return this.http.post(this.url+'/parking/saveParking', parking);
}

editParking(parking: Parking):Observable<any>
{
  return this.http.post(this.url+'/parking/updateParking', parking);
}

deleteParking(id:string):Observable<any>
{
  return this.http.delete(this.url+'/parking/delete/'+id);
}
}

export interface Parking{
  
  idparking:string;
  parkingname:string;
}
