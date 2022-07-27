import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotsService } from 'src/app/services/slots.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
  id:string="";
  vehicleUpdate: any={
    idvehicle: '',
    type: {idtype:''} ,
    brand: '', 
    model: '',
    color: '',
    year: '',
    register: '',
    description: ''
  };

  selectValue='';
  typeList: any;

  constructor(private vehicleService: VehicleService, private slotsService: SlotsService, private antivateRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.slotsService.getTypevehicles().subscribe((data:any)=> {this.typeList=data;})
    this.id= this.antivateRouter.snapshot.params.id;
    this.vehicleService.getVehicleById(this.id).subscribe(
      res=>{
        this.vehicleUpdate=res;
      },
      err=>console.log(err)
    );
  }

  updateVehicle(){
    this.vehicleService.editVehicle(this.vehicleUpdate).subscribe(
      res=>{
        this.router.navigate(['/vehicle']);
      },

      err=>console.log(err)
    );
  }

}
