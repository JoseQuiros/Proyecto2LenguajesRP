import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  listReservation:any=[];
  
  

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.listReservations();
  }

  listReservations()
  {
    this.reservationService.getReservations().subscribe(
      res=>{
        this.listReservation=res;
      },
      err=>console.log(err)
    );

  }

}
