import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-update-rol',
  templateUrl: './update-rol.component.html',
  styleUrls: ['./update-rol.component.css']
})
export class UpdateRolComponent implements OnInit {
  id:string="";
  rolUpdate: any={
    idrol: '',
    authority: ''
  };

  constructor(private rolService: RolService, private antivateRouter: ActivatedRoute,
    private router:Router) {       
  }
  
  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params.id;
    this.rolService.getRolById(this.id).subscribe(
      res=>{
        this.rolUpdate=res;
      },
      err=>console.log(err)
    );
  }

  updateRol(){
    this.rolService.editRol(this.rolUpdate).subscribe(
      res=>{
        this.router.navigate(['/rol']);
      },

      err=>console.log(err)
    );
  }
    

}
