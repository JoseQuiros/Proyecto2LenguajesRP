import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotsService } from 'src/app/services/slots.service';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-register-tarifa',
  templateUrl: './register-tarifa.component.html',
  styleUrls: ['./register-tarifa.component.css']
})
export class RegisterTarifaComponent implements OnInit {
  newFee: any={
    typevehicle: {idtype:''} ,
    times: {idtimes:''}, 
    price: ''
  };

  selectValueV='';
  selectValueT='';
  typesList: any;
  timeList: any;

  constructor(private slotsService: SlotsService, private tarifaService: TarifaService, private router:Router) { }

  ngOnInit(): void {
    this.tarifaService.getTimes().subscribe((dataTime:any)=> {this.timeList=dataTime;})
    this.slotsService.getTypevehicles().subscribe((dataType:any)=> {this.typesList=dataType;})
  }

  addFees(){
    this.tarifaService.saveFee(this.newFee).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/tarifa']);
    },
    err=>console.log(err)
    );
  }


}
