import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { GuardianGuard } from 'src/servicios/guardian.guard';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"proyecto", component: ProyectoComponent, canActivate:[GuardianGuard]},
  {path:"actualiza", component: ActualizaComponent, canActivate:[GuardianGuard]},
  {path:"actualiza/:id", component: ActualizaComponent},
  {path:"login", component: LoginComponent},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
