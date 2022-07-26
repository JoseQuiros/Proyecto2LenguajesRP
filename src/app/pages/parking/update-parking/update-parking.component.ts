import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-update-parking',
  templateUrl: './update-parking.component.html',
  styleUrls: ['./update-parking.component.css']
})
export class UpdateParkingComponent implements OnInit {
  id:string="";
  parkingUpdate: any={
    idparking: '',
    parkingname: ''
  };

  constructor(private parkingService: ParkingService, private antivateRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params.id;
    this.parkingService.getParkingById(this.id).subscribe(
      res=>{
        this.parkingUpdate=res;
      },
      err=>console.log(err)
    );
  }

  updateParking(){
    this.parkingService.editParking(this.parkingUpdate).subscribe(
      res=>{
        this.router.navigate(['/parking']);
      },

      err=>console.log(err)
    );
  }

}
