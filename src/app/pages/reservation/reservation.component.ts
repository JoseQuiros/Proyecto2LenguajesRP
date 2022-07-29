import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  listReservation:any=[];
  stringJson: string ="";
  i:any=0;   j:any=0; 



  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.listReservations();
  }

  listReservations()
  {
    this.reservationService.getReservations().subscribe(
      res=>{
        this.listReservation=res;
        this.stringJson = JSON.stringify(   this.listReservation);
        console.log(this.stringJson);
      },
      err=>console.log(err)
    );

  }


  delete(id:string)
  {
    
    this.reservationService.delete(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
      
    );
    
  
  }

}
