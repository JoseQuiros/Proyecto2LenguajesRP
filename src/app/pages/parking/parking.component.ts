import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  listParking:any=[];

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.listParkings();
  }

  listParkings()
  {
    this.parkingService.getParkings().subscribe(
      res=>{
        this.listParking=res;
      },
      err=>console.log(err)
    );

  }

  deleteParking(id:string)
  {
    this.parkingService.deleteParking(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
