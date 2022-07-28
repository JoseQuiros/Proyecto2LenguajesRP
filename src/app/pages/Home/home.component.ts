import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { Users, UsersService } from 'src/app/services/users.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any = {
    iduser: '',
    email: '',
    clave: '',
  };
  userCompare: any={
    rol: {idrol:'',name:'',authority:''} ,
    name: '', 
    dni: '',
    age: '',
    telephone: '',
    email: '',
    clave: ''
  };
  vehicleUpdate: any={
    idvehicle: '',
    type: {idtype:''} ,
    brand: '', 
    model: '',
    color: '',
    year: '',
    register: '',
    description: ''
  };

  registerForm:any = FormGroup;
  submitted = false;
  flagLogin=false;
  constructor(
    private userService: UsersService,
    private readonly router: Router,
    private localStorageService: LoginService,
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder
  ) {}
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      this.getUserByEmail();
    }
   
  }



  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });



  }
  getUserByEmail(): void {
    this.userService.getUsersByEmail(this.user.email).subscribe(
      (res) => {
        this.userCompare = res;
 
        this.login();
      },
      (err) => console.log(err)
    );
  }

  login() {
    if (this.user.clave == this.userCompare.clave) {

      this.localStorageService.saveData('iduser',this.userCompare.iduser);
      this.localStorageService.saveData('authority',this.userCompare.rol.authority);
      this.localStorageService.saveData('name',this.userCompare.name);
  
      if(this.userCompare.rol.authority==1){

        this.vehicleService.getVehicleByClient(this.userCompare.iduser).subscribe(
          res=>{
            this.vehicleUpdate=res;
         
            this.localStorageService.saveData('typevehicle',this.vehicleUpdate.type.idtype);
          },
          err=>console.log(err)
        );

      }
     
     

      this.redirectView(this.userCompare.rol.authority);

    } else {
      this.flagLogin=true;
    }
   
  }
  redirectView(flag: number) {
  
    
    switch (flag) {
      case 1:
       
   
        this.router.navigate(['/seats']);
     
        break;
      case 2:
        this.router.navigate(['/about']);
       
        break;
      case 3:
        this.router.navigate(['/about']);
        
        break;
    }
  }

  logout(){

    this.router.navigate(['/home']);
    this.localStorageService.clearData();
  }



  
}
