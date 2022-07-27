import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id:string="";
  clientUpdate: any={
    idclient: '',
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

  constructor(private clientService:ClientService, private vehicleService: VehicleService, private antivateRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((data:any)=> {this.vehiclesList=data;})
    this.id= this.antivateRouter.snapshot.params.id;
    this.clientService.getClientById(this.id).subscribe(
      res=>{
        this.clientUpdate=res;
      },
      err=>console.log(err)
    );
  }

  updateClient(){
    this.clientService.editClient(this.clientUpdate).subscribe(
      res=>{
        this.router.navigate(['/listClient']);
      },

      err=>console.log(err)
    );
  }

}
