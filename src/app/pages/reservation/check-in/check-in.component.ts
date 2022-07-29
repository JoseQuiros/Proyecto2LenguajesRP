import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { LoginService } from 'src/app/services/login.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  id:string="";
  idres: string="";
  newBill: any={
    // idreservation: '',
    client: '',
    vehicle: '',
    parking: '',
    parkingslot: '',
    totalcost: '',
    facturator: ''
  }
  
  reservList: any;

  constructor(private reservationService: ReservationService, private loginService: LoginService,
    private billService: BillService, private router:Router, private antivateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params.id;
    this.reservationService.getReservationById(this.id).subscribe(
      res=>{
        this.reservList=res;
        this.idres = this.reservList[0];
        this.newBill.client = this.reservList[3];
        this.newBill.vehicle = this.reservList[4];
        this.newBill.parking = this.reservList[1];
        this.newBill.parkingslot = this.reservList[2];
        this.newBill.totalcost = this.reservList[8];
        this.newBill.facturator = this.loginService.getData("name");
    console.log(this.newBill)
      },
      err=>console.log(err)
    );
    
  }

  addBill(){
    this.billService.saveBill(this.newBill, this.idres).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/reservation']);
    },
    err=>console.log(err)
    );
    console.log(this.idres)
  }

}
