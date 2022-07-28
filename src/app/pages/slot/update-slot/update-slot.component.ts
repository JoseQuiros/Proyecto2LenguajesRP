import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotsService } from 'src/app/services/slots.service';

@Component({
  selector: 'app-update-slot',
  templateUrl: './update-slot.component.html',
  styleUrls: ['./update-slot.component.css']
})
export class UpdateSlotComponent implements OnInit {

  id:string="";
  slotUpdate: any={
    idparkingslot: '',
    typevehicle: {idtype:''},
    preferentialslot: ''
  };

  selectValueT='';
  typesList: any;

  constructor(private slotsService: SlotsService, private router:Router, private antivateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.slotsService.getTypevehicles().subscribe((data:any)=> {this.typesList=data;})
    this.id= this.antivateRouter.snapshot.params.id;
    this.slotsService.getSlotsById(this.id).subscribe(
      res=>{
        this.slotUpdate=res;
      },
      err=>console.log(err)
    );
  }

  updateSlot(){
    this.slotsService.editSlots(this.slotUpdate).subscribe(
      res=>{
        this.router.navigate(['/slot']);
      },

      err=>console.log(err)
    );
  }

}
