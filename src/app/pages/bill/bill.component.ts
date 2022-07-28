import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  listBill:any=[];

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.listBills();
  }

  listBills()
  {
    this.billService.getBills().subscribe(
      res=>{
        this.listBill=res;
      },
      err=>console.log(err)
    );

  }

}
