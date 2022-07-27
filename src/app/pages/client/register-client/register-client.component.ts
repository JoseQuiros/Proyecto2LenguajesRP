import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { SlotsService } from 'src/app/services/slots.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  newClient: any={
    vehicle: {idvehicle:''} ,
    name: '', 
    dni: '',
    age: '',
    telephone: '',
    email: '',
    clave: ''
  };

  selectValue='';
  vehiclesList: any;

  constructor(private clientService: ClientService, private vehicleService: VehicleService, private router:Router) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((data:any)=> {this.vehiclesList=data;})
  }

  addClient(){
    this.clientService.saveClient(this.newClient).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/listClient']);
    },
    err=>console.log(err)
    );
    }

    
}
