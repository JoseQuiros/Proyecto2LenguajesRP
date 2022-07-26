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
    rol: {idrol:''} ,
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
      this.localStorageService.saveData('email',this.userCompare.email);
      this.localStorageService.saveData('name',this.userCompare.name);
      this.localStorageService.saveData('authority',this.userCompare.authority)
      this.redirectView(this.userCompare.authority);
    } else {
   
    }
    this.router.navigate(['about']);
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



  }
}
