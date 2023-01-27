import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Empleado } from '../modelos/empleado';
import { ServicioEmpleadosService } from 'src/servicios/servicio-empleados.service';
import { CrudEmpleadosService } from 'src/servicios/crud-empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css'],
})
export class ActualizaComponent implements OnInit {
  public titulo: string = 'Modifica el empleado';
  public empleados: Empleado[];
  public empleado: Empleado;
  public empleado2: Empleado;
  public empleado3: Empleado;
  public indice: any;
  public indice2: any;
  public indice3: any;
  public accion: number | string;

  constructor(
    private _router: Router,
    private activateRouter: ActivatedRoute,
    private serviceEmpleado: ServicioEmpleadosService,
    private crudSevice:CrudEmpleadosService
  ) {}

  ngOnInit(): void {
    //llamamos al servicio para llamar a empleados y almacenarlos en la variable "empleados" de manera local
    this.empleados = this.serviceEmpleado.empleados;

    //----------------------------------------------------------------------------------------------------------------
    // podemos recibir el "id" que viene desde el componente "hijo" de dos maneras

    // 1) a traves de un string
    this.indice = this.activateRouter.snapshot.params['id'];
    console.log(this.indice);

    // 2) a traves de un objeto usando notacion de corchetes.
    this.activateRouter.params.subscribe(
      (arg: Params) => (this.indice2 = arg['id'])
    );
    console.log(this.indice2);

    //3) a traves de un objeto usando notacion de puntos
    this.activateRouter.params.subscribe((arg: Params) => (this.indice3 = arg));
    console.log(this.indice3.id);

    //----------------------------------------------------------------------------------------------------------------

    // le asignamos el valor que  recibimos por la url a travez de queryParams  a nuestra variable "accion."

    this.accion = this.activateRouter.snapshot.queryParams['accion'];

    //----------------------------------------------------------------------------------------------------------------

    //* obtenemos el empleado que deseamos de la siguiente manera
    // this.empleado = this.empleados[this.indice];

    // otra manera de obtenerlo es accediendo  directamente  al servicio donde se encuentra el array original y le pasamos el "indice"
    this.empleado = this.serviceEmpleado.empleados[this.indice];
    console.log(this.empleado);

    //* obtenemos el empleado que deseamos de la siguiente manera
    // this.empleado2 = this.empleados[this.indice2];

    // otra manera de obtenerlo es accediendo  directamente  al servicio donde se encuentra el array original y le pasamos el "indice"
    this.empleado2 = this.serviceEmpleado.empleados[this.indice];
    console.log(this.empleado2);

    //* obtenemos el empleado que deseamos de la siguiente manera
    // this.empleado3 = this.empleados[this.indice3.id];

    // otra manera de obtenerlo es accediendo  directamente  al servicio donde se encuentra el array original y le pasamos el "indice"
    this.empleado3 = this.serviceEmpleado.empleados[this.indice];
    console.log(this.empleado3);
  }
  //----------------------------------------------------------------------------------------------------------------

  actualizar() {
    // almacenamos en la variable "newEmpleado" el objeto "empleado"  con las propiedades  que modificaremos,para poder enviarlas al servicio.
    let newEmpleado = new Empleado(
      this.empleado.nombre,
      this.empleado.apellido,
      this.empleado.cargo,
      this.empleado.sueldo
    );

    // utilizamos nuestro servicio para agregar "NewEmpleado" al array de "empleados" de nuestro servicio ya modificado.
    this.serviceEmpleado.actualizaEmpleado(newEmpleado, this.indice);
    // this.crudSevice.actualizaEmpleado(newEmpleado, this.indice);

    //utilizamos me metodo  "navigateByUrl" para volver al "home" una vez modifiquemos el empleado dentro de un setTimeOut para darle
    // un poco de tiempo al servicio de que realice la modiciacion.

    setTimeout(() => {
      this._router.navigateByUrl('/home');
    }, 500);
  }

  eliminar() {
    this.serviceEmpleado.eliminaEmpleado(this.indice);
    console.log(this.serviceEmpleado.getEmpleados());

    setTimeout(() => {
      this._router.navigateByUrl('/home');
    }, 500);
  }

  accionEmpleado() {
    if (this.accion == 1) {
      let newEmpleado = new Empleado(
        this.empleado.nombre,
        this.empleado.apellido,
        this.empleado.cargo,
        this.empleado.sueldo
      );
      this.serviceEmpleado.actualizaEmpleado(newEmpleado, this.indice);

      setTimeout(() => {
        this._router.navigateByUrl('/home');
      }, 500);
      
    } else {

      this.serviceEmpleado.eliminaEmpleado(this.indice);
      console.log(this.serviceEmpleado.getEmpleados());

      setTimeout(() => {
        this._router.navigateByUrl('/home');
      }, 500);
    }
  }
}
