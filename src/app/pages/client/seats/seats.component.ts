import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/services/parking.service';
import { ParkinslotsService } from 'src/app/services/parkinslots.service';
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
  parking:any={
    idparking:  '',
    parkingName:''
  }
  constructor(private parkingslotservice: ParkinslotsService, private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.parkingService.getAllParkings().subscribe((data:any)=> {this.parkingList=data;})


  }
 
  GetParkingSlotByParking(_idParking: number)
  {
    this.parkingslotservice.GetParkingSlotByParking(_idParking).subscribe(
      res=>{
        this.list=res;
     
      },
      err=>console.log(err)
    );

  }

  fillParkingSlots (event: any) {
    //update the ui
    this.idParking = event.target.value;
    this.GetParkingSlotByParking(this.idParking);
  }

}
