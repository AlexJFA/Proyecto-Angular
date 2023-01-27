import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { LoginService } from 'src/servicios/login.service';


//declaramos las propiedades de nuestro proyecto firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZINFx9mWbsrRutgkoN6sjbrO4zlaBpaw",
  authDomain: "angularpildoramagica.firebaseapp.com",
  databaseURL: "https://angularpildoramagica-default-rtdb.firebaseio.com",
  projectId: "angularpildoramagica",
  storageBucket: "angularpildoramagica.appspot.com",
  messagingSenderId: "290664104148",
  appId: "1:290664104148:web:f48acb62e3c5c581be7b41"

}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   

  constructor(private _loginServices:LoginService) { 
 
  }

  ngOnInit(): void {

    //          Inicializamos nuestro proyecto  Firebase
    //llamamos al metodo "initializeApp()" y le pasamos como parametro la contante "firebaseConfig" la cual contiene la configuracion del proyeto de firebase
    // como la "apiKey" "authDomain"  "databaseURL" etc.
    initializeApp(firebaseConfig);
  
  }

  logueado(){
    return this._loginServices.estaLogueado()
  }

  deslogear(){

    return this._loginServices.logout()
  }


}
