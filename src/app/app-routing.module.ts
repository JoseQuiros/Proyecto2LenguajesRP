import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomeComponent } from './pages/Home/home.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
