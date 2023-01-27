import { Component, OnInit } from '@angular/core';
import { CrudEmpleadosService } from 'src/servicios/crud-empleados.service';
import { ServicioEmpleadosService } from 'src/servicios/servicio-empleados.service';
import { ActivatedRoute } from '@angular/router'; 
import { Empleado } from '../modelos/empleado';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public titulo = 'Soy el componente Padre';
  public empleados: Empleado[] = [];

  constructor(
    private servicioEmpleados: ServicioEmpleadosService,      // inyectamos nuestro servicio principal
    private _crudEmpleados: CrudEmpleadosService,
    
  ) {

    // a la propiedad "empleados" le asignamos el valor que llega desde nuestro "servicioEmpleados"
    // this.empleados = this.servicioEmpleados.empleados; 

  }

  ngOnInit(): void {
    this.servicioEmpleados.getEmpleados().subscribe((data) => console.log(data));
  
    // llamamos a nuestro servicio "servicioEmpleados" y con el metodo "getEmpleado" obtenemos todos los usuarios dentro de la base de datos.
    // la variable "empleado" solo acepta un array como valor por lo que usamos el Object.values(data);
    //  el cual dice que el valor que esta dentro  del objeto "data" se lo introduzca al array  "emple ados"

    this.servicioEmpleados.getEmpleados().subscribe(data => {
      this.empleados = Object.values(data)
      this.servicioEmpleados.setEmpleado(this.empleados)
    })
      

  
  }

  

  itemNombre = '';
  itemApellido = '';
  itemCargo = ''; // usamos two way binding para que estas propiedades tomen el valor
  itemSueldo = 0; // que introduscamos en el formulario

  registrar() {
    // almacenamos en la variable "newEmpleado" el objeto con el nuevo empleado utilizando el modelo New Empleado()
    let newEmpleado = new Empleado(
      this.itemNombre,
      this.itemApellido,
      this.itemCargo,
      this.itemSueldo
    );

    // utilizamos nuestro servicio para agregar "NewEmpleado" al array de "empleados" de nuestro servicio .
    this.servicioEmpleados.aggEmpleado(newEmpleado);

  }

  
}
