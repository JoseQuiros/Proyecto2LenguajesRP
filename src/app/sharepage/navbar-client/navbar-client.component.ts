import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {
  collapse: boolean = true;
  constructor( private readonly router: Router,
    private localStorageService: LoginService,) { }

  ngOnInit(): void {
  }
  Logout(){

    this.router.navigate(['/home']);
    this.localStorageService.clearData();
  }
}
