import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {
  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getFees():Observable<any>
  {
    return this.http.get<Fee>(this.url+'/fee/getAllFees');
  }

  getFeeById(id: string):Observable<any>
  {
    return this.http.get(this.url+'/fee/getFee/'+id);
  }

  saveFee(fee: Fee):Observable<any>
  {
    return this.http.post(this.url+'/fee/saveFee', fee);
  }

  editFee(fee: Fee):Observable<any>
  {
    return this.http.post(this.url+'/fee/updateFee', fee);
  }

  deleteSlots(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/fee/delete/'+id);
  }

  // otros
  getTimes():Observable<any>
  {
    return this.http.get<Times>(this.url+'/time/getTimes');
  }
}

export interface Fee{
  idfee:string;
  idtype:string;
  idtimes:string;
  price:string;
}

export interface Times{
  idtime:string;
  name:string;
}
