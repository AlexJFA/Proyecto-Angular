import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _loginServices:LoginService) { }

  ngOnInit(): void {
  }


  ingresar(formulario:NgForm){


    const email = formulario.value.email;
    const password = formulario.value.password;

    this._loginServices.login(email , password)
  }



}
