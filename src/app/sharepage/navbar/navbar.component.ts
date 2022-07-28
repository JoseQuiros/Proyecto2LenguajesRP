import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapse: boolean = true;
 
  ngOnInit(): void {
    
   this.authorityNavBar();
  }
  constructor(

  
    private readonly router: Router,
    private localStorageService: LoginService,
  ) {}
  public authorityNavBar(){
  if(this.localStorageService.getData('authority')=='2'){

    return 2;
  }else{

    return 3
  }

  }

  
  Logout(){

    this.router.navigate(['/home']);
    this.localStorageService.clearData();
  }
}


