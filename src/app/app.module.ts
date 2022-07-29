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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { RegisterRolComponent } from './pages/rol/register-rol/register-rol.component';
import { UpdateRolComponent } from './pages/rol/update-rol/update-rol.component';
import { RegisterParkingComponent } from './pages/parking/register-parking/register-parking.component';
import { UpdateParkingComponent } from './pages/parking/update-parking/update-parking.component';
import { RegisterSlotsComponent } from './pages/slot/register-slots/register-slots.component';
import { SeatsComponent } from './pages/client/seats/seats.component';
import { RegisterVehicleComponent } from './pages/vehicle/register-vehicle/register-vehicle.component';
import { UpdateVehicleComponent } from './pages/vehicle/update-vehicle/update-vehicle.component';
import { ListClientComponent } from './pages/client/list-client/list-client.component';
import { RegisterClientComponent } from './pages/client/register-client/register-client.component';
import { UpdateClientComponent } from './pages/client/update-client/update-client.component';


import { RegisterTarifaComponent } from './pages/tarifa/register-tarifa/register-tarifa.component';
import { UpdateTarifaComponent } from './pages/tarifa/update-tarifa/update-tarifa.component';
import { UpdateSlotComponent } from './pages/slot/update-slot/update-slot.component';
import { BillComponent } from './pages/bill/bill.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarClientComponent } from './sharepage/navbar-client/navbar-client.component';
import { CheckInComponent } from './pages/reservation/check-in/check-in.component';


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
    RegisterRolComponent,
    UpdateRolComponent,
    RegisterParkingComponent,
    UpdateParkingComponent,
    RegisterSlotsComponent,
    SeatsComponent,
    RegisterVehicleComponent,
    UpdateVehicleComponent,
    ListClientComponent,
    RegisterClientComponent,
    UpdateClientComponent,

    NavbarClientComponent,
    

    RegisterTarifaComponent,
    UpdateTarifaComponent,
    UpdateSlotComponent,
    BillComponent,
    NavbarClientComponent,
    CheckInComponent,

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ {path:'about',component:AboutComponent},
    {path:'tarifa',component:TarifaComponent},
    {path:'vehicle',component:VehicleComponent},

    {path:'home',component:HomeComponent},
    {path:'parking',component:ParkingComponent},
    {path:'slot',component:SlotComponent},
    {path:'rol',component:RolComponent},
    {path:'reservation',component:ReservationComponent},
    {path:'list',component:ListComponent},
    {path:'register',component:RegisterComponent},
    {path:'updateUser/:id',component:UpdateComponent},
    {path: 'registerRol', component:RegisterRolComponent},
    {path:'editRol/:id',component:UpdateRolComponent},
    {path:'registerParking',component:RegisterParkingComponent},
    {path:'editParking/:id',component:UpdateParkingComponent},
    {path:'registerSlots',component:RegisterSlotsComponent},
    {path:'seats',component:SeatsComponent},
    {path:'registerVehicle',component:RegisterVehicleComponent},
    {path:'updateVehicle/:id',component:UpdateVehicleComponent},
    {path:'listClient',component:ListClientComponent},
    {path:'registerClient',component:RegisterClientComponent},
    {path:'updateClient/:id',component:UpdateClientComponent},
    {path:'registerFee',component:RegisterTarifaComponent},
    {path:'updateFee/:id',component:UpdateTarifaComponent},
    {path:'updateSlots/:id',component:UpdateSlotComponent},
    {path:'bill',component:BillComponent},
    {path:'checkIn/:id',component:CheckInComponent},
  ]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
