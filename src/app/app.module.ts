import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjercicioUnoComponentComponent } from './components/ejercicio-uno-component/ejercicio-uno-component.component';
import { EjercicioDosComponent } from './components/ejercicio-dos/ejercicio-dos.component';
import { BienvenidosComponent } from './components/ejercicio-dos/logica/bienvenidos/bienvenidos.component';
import { HomeComponent } from './components/ejercicio-dos/logica/home/home.component';
import { LoginComponent } from './components/ejercicio-dos/logica/login/login.component';
import { ErrorComponent } from './components/ejercicio-dos/logica/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioUnoComponentComponent,
    EjercicioDosComponent,
    BienvenidosComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
