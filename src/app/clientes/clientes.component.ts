import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientes:any=[
    new Cliente(1,"ford",200000),
    new Cliente(1,"General motors",700000),
    new Cliente(1,"Honda",100000)
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
