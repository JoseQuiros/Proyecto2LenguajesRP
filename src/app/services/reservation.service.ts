import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getReservations():Observable<any>
{
  return this.http.get<Reservation>(this.url+'/reservation/getAllReservations');
}


delete(id:string):Observable<any>
{
  return this.http.delete(this.url+'/reservation/cancel/'+id);
}

getReservationById(id: string):Observable<any>
{
  return this.http.get(this.url+'/reservation/getReservation/'+id);
}

saveReservation(bill: Bill):Observable<any>
{
  return this.http.post(this.url+'/bill/insertBill', bill);
}



}





export interface Reservation{
  idreservation: string;
  parkingname: string;
  parkingslot: string;
  dni: string;
  vehicle: string;
  register: string,
  canttime: string;
  time: string;
  costtotal: string;
  initdate: string;
  finaldate: string;
}

export interface Bill{
  idreservation: string;
  client: string;
  vehicle: string;
  parking: string;
  parkingslot: string;
  totalcost: string;
  facturator: string;
}