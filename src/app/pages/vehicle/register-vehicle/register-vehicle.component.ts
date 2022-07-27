import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotsService } from 'src/app/services/slots.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {
  newVehicle: any={
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

  constructor(private vehicleService: VehicleService, private slotsService: SlotsService, private router:Router) { }

  ngOnInit(): void {
    this.slotsService.getTypevehicles().subscribe((data:any)=> {this.typeList=data;})
  }

  addVehicle(){
    this.vehicleService.saveVehicle(this.newVehicle).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/vehicle']);
    },
    err=>console.log(err)
    );
    }

}
