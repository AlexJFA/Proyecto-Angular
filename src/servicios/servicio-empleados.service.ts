import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/modelos/empleado';
import { CrudEmpleadosService } from './crud-empleados.service';
import { MiServicio } from './mi-servicio.service';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadosService {
  constructor(private servicioMensaje: MiServicio, private _crudService:CrudEmpleadosService) {}  // inyectamos el servicio "MiServicio"

  public empleados: Empleado[] = [];


  getEmpleados(){
    return this._crudService.getEmpleado()
  }

  setEmpleado(misEmpleados:Empleado[]){

      this.empleados = misEmpleados;

  }


  aggEmpleado(nuevoEmpleado: Empleado) {
    // utilizamos el servicio "MiServicio" dentro de servicio "ServicioEmpleadosService" para mostrar un mensaje.
    this.servicioMensaje.mostrarMensaje(
      `
      Se agrego el usuario    ${nuevoEmpleado.nombre}    ${nuevoEmpleado.apellido}  a la lista
      `
    );

    // hace push del nuevo empleado que llega por parametro desde nuestro componente y su metodo "registrar()", a nuestro array empleados.
    this.empleados.push(nuevoEmpleado);

    //---------------------
    this._crudService.createEmpleado(this.empleados)
  }


  actualizaEmpleado(empleado:Empleado, indice:any){

    // el objeto dentro del array empleados cuyo indice sea igual a "indice" ahora sera igual al valor que tenga "empleado" que llega pornparametro
    // this.empleados[indice] = empleado
    // console.log(this.empleados[indice])
    // console.log(empleado)
    // console.log(this.empleados)

    this._crudService.actualizaEmpleado(empleado, indice)
  
  }

  eliminaEmpleado(indice:any){



    // Elimino el usuario del la base de catos
    this._crudService.eliminarEmpleado(indice)

    // Elimino el empleado del array local
    this.empleados.splice(indice, 1)

    // reconstruyo de de nuevo el JSON en la base de datos pasandole por parametro  el array local.
    // siempre y cuado el array de empleados sea direferente a "nul o "undefined
    if(this.empleados != null || this.empleados != undefined)  this._crudService.createEmpleado(this.empleados)

    
  }


}


