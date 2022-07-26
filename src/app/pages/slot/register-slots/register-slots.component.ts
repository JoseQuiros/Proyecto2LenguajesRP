import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotsService } from 'src/app/services/slots.service';

@Component({
  selector: 'app-register-slots',
  templateUrl: './register-slots.component.html',
  styleUrls: ['./register-slots.component.css']
})
export class RegisterSlotsComponent implements OnInit {
  newSlot: any={
    parking: {idparking:''} ,
    typevehicle: {idtype:''}, 
    number: '',
    preferentialslot: ''
  };

  selectValueP='';
  selectValueT='';
  parkingsList: any;
  typesList: any;

  constructor(private slotsService: SlotsService, private router:Router) { }

  ngOnInit(): void {
    this.slotsService.getParkings().subscribe((dataP:any)=> {this.parkingsList=dataP;})
    this.slotsService.getTypevehicles().subscribe((dataT:any)=> {this.typesList=dataT;})
  }

  addSlots(){
    this.slotsService.saveSlots(this.newSlot).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/slot']);
    },
    err=>console.log(err)
    );
  }

}
