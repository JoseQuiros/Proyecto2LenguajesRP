import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-register-parking',
  templateUrl: './register-parking.component.html',
  styleUrls: ['./register-parking.component.css']
})
export class RegisterParkingComponent implements OnInit {
  newParking: any={
    parkingname: ''
  };

  constructor(private parkingService: ParkingService, private router:Router) { }

  ngOnInit(): void {
  }

  addParking(){
    this.parkingService.saveParking(this.newParking).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/parking']);
    },
    err=>console.log(err)
    );
    }

}
