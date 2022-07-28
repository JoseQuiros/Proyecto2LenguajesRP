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
