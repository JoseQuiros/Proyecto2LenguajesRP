import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:string="";
  userUpdated: any={
    iduser: '',
    rol: {idrol:''} ,
    name: '',
    dni: '',
    age: '',
    telephone: '',
    email: '',
    clave: '',
    state: ''
  };

  selectValue='';
  rolsList: any;
  constructor(private userService:UsersService,private antivateRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.userService.getRols().subscribe((data:any)=> {this.rolsList=data;})
    this.id= this.antivateRouter.snapshot.params.id;
    this.userService.getUsersById(this.id).subscribe(
      res=>{
        this.userUpdated=res;
      },
      err=>console.log(err)
    );
  }

  updateUser(){
    this.userService.editUser(this.userUpdated).subscribe(
      res=>{
        this.router.navigate(['/list']);
      },

      err=>console.log(err)
    );
  }

}
