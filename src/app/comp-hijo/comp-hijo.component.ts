import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado';

@Component({
  selector: 'app-comp-hijo',
  templateUrl: './comp-hijo.component.html',
  styleUrls: ['./comp-hijo.component.css']
})
export class CompHijoComponent implements OnInit {

  @Input() item:Empleado;
  @Input() i:number;

  constructor() { }

  ngOnInit(): void {
  }

// este array sera el que acumule las nuevas caracteristicas que provengan del componenete nieto.
  arrayCaracteristica = ['Puntual', 'Responsable'];

  // esta funcion sera la que agregue el valor que ingresemos en el Input al nuestro array  "arrayCaracteristica"
  agragarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristica.push(nuevaCaracteristica);
  }

}
