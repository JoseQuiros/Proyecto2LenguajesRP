import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-register-rol',
  templateUrl: './register-rol.component.html',
  styleUrls: ['./register-rol.component.css']
})
export class RegisterRolComponent implements OnInit {

  newRol: any={
    name: '', 
    authority: ''
  };

  constructor(private rolService: RolService, private router:Router) { }

  ngOnInit(): void {
  }

  addRol(){
    this.rolService.saveRol(this.newRol).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/rol']);
    },
    err=>console.log(err)
    );
    }

}
