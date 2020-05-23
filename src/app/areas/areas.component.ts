import { Component, OnInit } from '@angular/core';
import { Area } from './area';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  
  areas:any=[
    new Area(1,"cortado de tubo","luis mendez","tubo"),
    new Area(1,"soldado de tubo","ana gutierrez","tubo soldado"),
    new Area(1,"pintura","carlos mendez","tubo pintado"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
