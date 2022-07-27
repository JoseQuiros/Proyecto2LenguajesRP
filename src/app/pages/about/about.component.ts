import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { HomeComponent } from '../Home/home.component';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


export const ROUTES: Routes = [
  { path: 'admin-page', component:AdminPageComponent }, 

  { path: '', pathMatch: 'full', redirectTo: 'admin-page' }, 
  { path: '**', pathMatch: 'full', redirectTo: 'admin-page' }, 
];
const routes: Routes=[
  {path:'admin-page',component:AdminPageComponent}
]
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {

  constructor(private localStorage: LoginService) { }

  ngOnInit(): void {
    console.log(localStorage.getData('iduser'));
  }

}
