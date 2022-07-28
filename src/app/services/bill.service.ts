import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getBills():Observable<any>
{
  return this.http.get<Bill>(this.url+'/bill/getAllBills');
}

saveBill(bill: Bill):Observable<any>
{
  return this.http.post(this.url+'/bill/insertBill', bill);
}
}

export interface Bill{
    idbill: string;
    client: string;
    vehicle: string;
    daterem: string,
    parking: string;
    parkingslot: string;
    totalcost: string;
    facturator: string;
}
