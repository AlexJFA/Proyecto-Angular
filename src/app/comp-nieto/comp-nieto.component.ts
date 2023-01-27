import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MiServicio } from 'src/servicios/mi-servicio.service';

@Component({
  selector: 'app-comp-nieto',
  templateUrl: './comp-nieto.component.html',
  styleUrls: ['./comp-nieto.component.css']
})
export class CompNietoComponent implements OnInit {

  @Output() caracteristicaEmpleados = new EventEmitter<string>();
  

  constructor(private miServicio:MiServicio) { }

  ngOnInit(): void {
  }

  // este metodo captura el valor del input y lo emite a travez de la propiedad "caracteristicaEmpleados"
  agregarCaracteristica(value: string) {
    this.caracteristicaEmpleados.emit(value);

    // utilizamos nuestro servicio para mostrar un mensaje.
    this.miServicio.mostrarMensaje("Se agrego la siguiente caracteristica: " + value )
  }

}
