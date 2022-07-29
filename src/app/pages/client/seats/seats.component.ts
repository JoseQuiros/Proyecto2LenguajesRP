import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ParkingService } from 'src/app/services/parking.service';
import { ParkinslotsService } from 'src/app/services/parkinslots.service';
import { TarifaService } from 'src/app/services/tarifa.service';
@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
   idParking:number=0;
   list:any=[];
   listSeats:any=[];
   parkingList:any=[];
   timeList: any;


   parking:any={
    idparking:  '',
    parkingName:''
   }

  parkingslot:any={
    idparking: '',
    parkingName:'',
    slotnumber:'',
    idparkingslot:'',
    // idparking:'',
    idtime:'', 
    // idparkingslot:'',
    idclient: '',
    initdate: '',
    canttime: ''
  }

  // newReserv: any={
  //   idparking:'',
  //   idtimes:'', 
  //   idparkingslot:'',
  //   idclient: '',
  //   initdate: '',
  //   canttime: ''
  // };
  constructor(private parkingslotservice: ParkinslotsService, private tarifaService: TarifaService, 
    private parkingService: ParkingService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.parkingService.getAllParkings().subscribe((data:any)=> {this.parkingList=data;})
    this.tarifaService.getTimes().subscribe((dataTime:any)=> {this.timeList=dataTime;})
    this.parkingslot.idclient = this.loginService.getData("iduser");
  }
 
  GetParkingSlotByParking(_idParking: number)
  {
    this.parkingslotservice.GetParkingSlotByParking(_idParking).subscribe(
      res=>{
        this.list=res;  
        console.log(this.parking)
        console.log(this.parkingslot)   
      },
      err=>console.log(err)
    );

  }

  addReservation(){
    this.parkingslotservice.saveReservation(this.parkingslot).subscribe(res=>{
      console.log(res);
      console.log(this.parkingslot)
    },
    err=>console.log(err)
    );
    console.log(this.parkingslot)
  }

  fillParkingSlots (event: any) {
    //update the ui
    this.idParking = event.target.value;
    this.GetParkingSlotByParking(this.idParking);
  }

  selectSeat(idparkingslot:number,numberSlot:string, parkingname:string, idparking:number){
    this.parkingslot.idparkingslot=idparkingslot;
    this.parkingslot.idparking=idparking;
    this.parkingslot.slotnumber= numberSlot;
    this.parkingslot.parkingName=parkingname;
    console.log('clickeado'+ this.parkingslot.parkingName );

 }
}
