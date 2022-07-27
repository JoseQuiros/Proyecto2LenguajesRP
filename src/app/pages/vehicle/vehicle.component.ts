import { Component, OnInit } from '@angular/core';
import { SlotsService } from 'src/app/services/slots.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  listVehicle:any=[];

  constructor(private vehicleService: VehicleService, private slotsService: SlotsService) { }

  ngOnInit(): void {
    this.listVehicles();
  }

  listVehicles()
  {
    this.vehicleService.getVehicles().subscribe(
      res=>{
        this.listVehicle=res;
      },
      err=>console.log(err)
    );

  }

  delete(id:string)
  {
    this.vehicleService.deleteVehicle(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
