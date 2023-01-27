import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class MiServicio {

  constructor() { }


  mostrarMensaje(mensaje:string){

    return alert(mensaje);
  }




}
