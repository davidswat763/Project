import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { TiendaComponent } from './tienda/tienda.component';
import { AnimalsComponent } from './animals/animals.component';
import { HomeComponent } from './home/home.component';
import { KeeperComponent } from './keeper/keeper.component';
import { ContactComponent } from './contact/contact.component';

// Array de rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  // para que haga la redirección
  {path: '', redirectTo: 'app-home', pathMatch: 'full'},
  {path: 'tienda', component: TiendaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'keeper', component: KeeperComponent},
  {path: 'contact', component: ContactComponent},
  // o el 404
  {path: '**', component: HomeComponent}
];
// configuracion para el router
export const appRoutingProviders: any[] = [];
// Modulo de rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
