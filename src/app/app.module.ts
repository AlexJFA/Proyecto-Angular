import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MiServicio } from 'src/servicios/mi-servicio.service';
import { ServicioEmpleadosService } from 'src/servicios/servicio-empleados.service';
import { CrudEmpleadosService } from 'src/servicios/crud-empleados.service';
import {HttpClientModule } from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompHijoComponent } from './comp-hijo/comp-hijo.component';
import { CompNietoComponent } from './comp-nieto/comp-nieto.component';
import { HomeComponent } from './home/home.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';

//importamos el servicio de cookies
import { CookieService } from 'ngx-cookie-service';





@NgModule({
  declarations: [
    AppComponent,
    CompHijoComponent,
    CompNietoComponent,
    HomeComponent,
    ProyectoComponent,
    ActualizaComponent,
    Error404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [MiServicio, ServicioEmpleadosService, CrudEmpleadosService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
