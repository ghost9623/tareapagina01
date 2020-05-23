import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:any=[
    new Empleado(1,"luis montaivo","6141352751","marmol","cortado de tubo"),
    new Empleado(1,"jose luis morales","6141155751","zootecnia","pintura"),
    new Empleado(1,"luis montaivo","6141312252","martin lopez","soldadura")
 
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
