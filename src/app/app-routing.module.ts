import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { ListadoComponent } from './components/listado/listado.component'

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'listado', component: ListadoComponent },
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
