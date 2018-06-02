import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TiendaComponent} from './tienda/tienda.component';
// Array de rutas
const appRoutes: Routes = [
  {path: '', component: TiendaComponent},
  // para que haga la redirección
  {path: '', redirectTo: 'app-tienda', pathMatch: 'full'},
  {path: 'app-tienda', component: TiendaComponent},
  {path: '**', component: TiendaComponent}
];
// configuracion para el router
export const appRoutingProviders: any[] = [];
// Modulo de rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
