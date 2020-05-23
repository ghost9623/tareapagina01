import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any=[
    new Producto(1,"Escape",1123445),
    new Producto(1,"tubo de agua",1234567),
    new Producto(1,"tubo de refigeracion",1434617)
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
