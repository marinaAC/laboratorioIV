import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'practicas primera clase';

  edadUno?:number;
  edadDos?:number;
  suma?:number;
  promedio?:number | string;


  calcularPromedio(){
    if(this.edadUno !== undefined && this.edadDos !== undefined){
        this.suma = this.edadUno + this.edadDos;
        this.promedio = this.validarSiEsCero(this.edadDos) ? "No se puede dividir por cero" : this.suma / 2 ;
    }
  }

  limpiar(){
      this.edadUno = undefined;
      this.edadDos = undefined;
      this.promedio = undefined;
      this.suma = undefined;
  }

  private validarSiEsCero(number:number):boolean{
    return number === 0;
  }
}
