import { Component, OnInit } from '@angular/core';
import { SlotsService } from 'src/app/services/slots.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  listSlot:any=[];

  constructor(private slotsService:SlotsService) { }

  ngOnInit(): void {
    this.listSlots();
  }

  listSlots()
  {
    this.slotsService.getSlots().subscribe(
      res=>{
        this.listSlot=res;
      },
      err=>console.log(err)
    );

  }

  delete(id:string)
  {
    this.slotsService.deleteSlots(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
