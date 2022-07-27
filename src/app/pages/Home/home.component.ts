import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Users, UsersService } from 'src/app/services/users.service';

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

  formData!: FormGroup;
  constructor(
    private userService: UsersService,
    private readonly router: Router,
    private localStorageService: LoginService,
  ) {}

  ngOnInit(): void {}
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
      this.redirectView(this.userCompare.rol.authority);
    } else {
   console.log("pasword incorrecto"+"user ingresado clave:"+this.user.clave+" user traido clave " +this.userCompare.clave );
    }
   
  }
  redirectView(flag: number) {
    console.log("flagggg"+ flag);
    switch (flag) {
      case 1:
        this.router.navigate(['/seats']);
        this.localStorageService.saveData('name',this.userCompare.name);
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



  }



  
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
    }
  
    public getData(key: string) {
      return localStorage.getItem(key)
    }
    public removeData(key: string) {
      localStorage.removeItem(key);
    }
  
    public clearData() {
      localStorage.clear();
    }
}
