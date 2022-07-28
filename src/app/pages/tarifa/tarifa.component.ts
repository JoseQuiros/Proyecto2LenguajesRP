import { Component, OnInit } from '@angular/core';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {
  listFee:any=[];

  constructor(private tarifaService:TarifaService) { }

  ngOnInit(): void {
    this.listFees();
  }

  listFees()
  {
    this.tarifaService.getFees().subscribe(
      res=>{
        this.listFee=res;
      },
      err=>console.log(err)
    );

  }

  delete(id:string)
  {
    this.tarifaService.deleteSlots(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
