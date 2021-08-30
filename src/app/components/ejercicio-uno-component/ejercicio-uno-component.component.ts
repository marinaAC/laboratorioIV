import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-uno-component',
  templateUrl: './ejercicio-uno-component.component.html',
  styleUrls: ['./ejercicio-uno-component.component.less']
})
export class EjercicioUnoComponentComponent implements OnInit {

  edadUno?:number;
  edadDos?:number;
  suma?:number;
  promedio?:number | string;

  constructor() { }

  ngOnInit(): void {
  }


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
