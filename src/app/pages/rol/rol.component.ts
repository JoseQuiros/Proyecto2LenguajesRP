import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  listRol:any=[];

  constructor(private rolService: RolService) { }

  ngOnInit(): void {
    this.listRoles();
  }

  listRoles()
  {
    this.rolService.getRoles().subscribe(
      res=>{
        this.listRol=res;
      },
      err=>console.log(err)
    );

  }

  deleteRoles(id:string)
  {
    this.rolService.deleteRol(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
