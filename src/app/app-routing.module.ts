import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{AreasComponent} from './areas/areas.component'
import{EmpleadosComponent} from './empleados/empleados.component'
import{ClientesComponent} from './clientes/clientes.component'
import{ProductosComponent} from './productos/productos.component'

import { from } from 'rxjs';

const routes: Routes = [
  {path:'area',component:AreasComponent},
  {path:'empleado',component:EmpleadosComponent},
  {path:'cliente',component:ClientesComponent},
  {path:'producto',component:ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
