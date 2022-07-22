import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: any={
    rol: {idrol:''} ,
    name: '', 
    dni: '',
    age: '',
    telephone: '',
    email: '',
    clave: ''
  };

  selectValue='';
  constructor(private usersService: UsersService, private router:Router) { }

  ngOnInit(): void {
  }
addUser(){
this.usersService.saveUser(this.newUser).subscribe(res=>{
  console.log(res);
  this.router.navigate(['/list']);
},
err=>console.log(err)
);


}
}
