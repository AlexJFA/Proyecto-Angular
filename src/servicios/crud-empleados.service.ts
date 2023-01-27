import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/modelos/empleado';
import { LoginService } from './login.service';




@Injectable({
  providedIn: 'root'
})
export class CrudEmpleadosService {

  public url:string = "https://angularpildoramagica-default-rtdb.firebaseio.com/datos.json/"

  constructor(private _http:HttpClient,private loginService:LoginService) { }


  getEmpleado(){

    //optemenos el tokenID del usuario  una vez este se loguea
    const token = this.loginService.getIdToken()
    // retornamos la peticion de los usuarios simpre y cuando el usuario este autenticado con su token.
    return this._http.get(this.url + "?auth=" + token)
  }

  createEmpleado(empleados:Empleado[]){

    return this._http.put(this.url, empleados).subscribe(data=>console.log(data))
  }

  actualizaEmpleado(empleado:Empleado, indice:number | string){

    let url = `https://angularpildoramagica-default-rtdb.firebaseio.com/datos/${indice}.json/`

    return this._http.put(url, empleado).subscribe(data=>console.log(data))

  }
  
  eliminarEmpleado(indice:any){

    let url = `https://angularpildoramagica-default-rtdb.firebaseio.com/datos/${indice}.json/`

    return this._http.delete(url).subscribe(data=>console.log( "Se elimino el Usuario de manera exitosa. " + data))
  }


}
