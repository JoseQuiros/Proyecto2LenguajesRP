import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservations-client',
  templateUrl: './reservations-client.component.html',
  styleUrls: ['./reservations-client.component.css']
})
export class ReservationsClientComponent implements OnInit {
  listReservation:any=[];
  stringJson: string ="";
  i:any=0;   j:any=0; 

  client:any={
    idclient:  ''
   }

  constructor(private reservationService: ReservationService, private localStorageService: LoginService,) { }

  ngOnInit(): void {
    this.client.idclient=this.localStorageService.getData("iduser"); //retrieve the object
    this.listReservations();
   
   
    console.log("XXxxxxXXXX"+this.client.idclient);
  }

  listReservations()
  {
    this.reservationService.getReservationsByClient(this.client.idclient).subscribe(
      res=>{
        this.listReservation=res;
        this.stringJson = JSON.stringify(this.listReservation);
        console.log(this.stringJson);
      },
      err=>console.log(err)
    );

  }


  cancelReservation(id:string)
  {
    
    this.reservationService.delete(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
      
    );
    
  
  }

}
