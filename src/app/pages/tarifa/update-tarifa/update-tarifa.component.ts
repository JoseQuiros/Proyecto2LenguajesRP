import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotsService } from 'src/app/services/slots.service';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-update-tarifa',
  templateUrl: './update-tarifa.component.html',
  styleUrls: ['./update-tarifa.component.css']
})
export class UpdateTarifaComponent implements OnInit {
  id:string="";
  feeUpdate: any={
    idfee: '',
    typevehicle: {idtype:''} ,
    times: {idtimes:''}, 
    price: ''
  };

  selectValueV='';
  selectValueT='';
  typesList: any;
  timeList: any;

  constructor(private slotsService: SlotsService, private tarifaService: TarifaService, 
    private router:Router, private antivateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.tarifaService.getTimes().subscribe((dataTime:any)=> {this.timeList=dataTime;})
    this.slotsService.getTypevehicles().subscribe((dataType:any)=> {this.typesList=dataType;})
    this.id= this.antivateRouter.snapshot.params.id;
    this.tarifaService.getFeeById(this.id).subscribe(
      res=>{
        this.feeUpdate=res;
      },
      err=>console.log(err)
    );
  }

  updateFee(){
    this.tarifaService.editFee(this.feeUpdate).subscribe(
      res=>{
        this.router.navigate(['/tarifa']);
      },

      err=>console.log(err)
    );
  }

}
