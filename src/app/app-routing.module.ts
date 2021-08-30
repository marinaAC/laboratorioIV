import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './components/ejercicio-dos/logica/bienvenidos/bienvenidos.component';
import { ErrorComponent } from './components/ejercicio-dos/logica/error/error.component';
import { LoginComponent } from './components/ejercicio-dos/logica/login/login.component';

const routes: Routes = [
  { path: 'bienvenidos', component: BienvenidosComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
