import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/Home/home.component';

import { AboutComponent } from './pages/about/about.component';

import { MenupageComponent } from './pages/menupage/menupage.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TarifaComponent } from './pages/tarifa/tarifa.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';

import { ParkingComponent } from './pages/parking/parking.component';
import { SlotComponent } from './pages/slot/slot.component';
import { RolComponent } from './pages/rol/rol.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ListComponent } from './pages/users/list/list.component';
import { RegisterComponent } from './pages/users/register/register.component';
import { UpdateComponent } from './pages/users/update/update.component';
import {HttpClientModule} from '@angular/common/http';
import { SeatsComponent } from './pages/client/seats/seats.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MenupageComponent,
    AdminPageComponent,

    TarifaComponent,
    VehicleComponent,

    ParkingComponent,
    SlotComponent,
    RolComponent,
    ReservationComponent,
    ListComponent,
    RegisterComponent,
    UpdateComponent,
    SeatsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ {path:'about',component:AboutComponent},
    {path:'tarifa',component:TarifaComponent},
    {path:'vehicle',component:VehicleComponent},

    {path:'parking',component:ParkingComponent},
    {path:'slot',component:SlotComponent},
    {path:'rol',component:RolComponent},
    {path:'reservation',component:ReservationComponent},
    {path:'list',component:ListComponent},
    {path:'register',component:RegisterComponent},
    {path:'seats',component:SeatsComponent},
    {path:'editar/:id',component:UpdateComponent}]),
 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
