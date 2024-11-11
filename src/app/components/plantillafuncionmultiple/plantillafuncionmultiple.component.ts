import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantillas } from '../../services/service.platillas';

@Component({
  selector: 'app-plantillafuncionmultiple',
  templateUrl: './plantillafuncionmultiple.component.html',
  styleUrl: './plantillafuncionmultiple.component.css'
})
export class PlantillafuncionmultipleComponent implements OnInit {

  @ViewChild('selectfunciones') selectfunciones!: ElementRef;

  public empleados!: Array<Plantilla>;
  public funciones!: Array<string>;
  public funcionesSeleccionadas: Array<string>;

  constructor(private _service: ServicePlantillas) {
    this.empleados = new Array<Plantilla>();
    this.funcionesSeleccionadas = new Array<string>();
  }

  mostrarPlantilla(): void {
    console.log("Hola")
    let aux = new Array<string>();
    for (var option of this.selectfunciones.nativeElement.options) {
      if (option.selected == true) {
        console.log(option.value)
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe(response => {
      console.log(response)
      this.empleados = response;
    })
  }
  ngOnInit(): void {
    
    this._service.getPlantilla().subscribe(response => {
      this.funciones = response;
    })
  }

  verFuncionPlantilla() {
    let funcion = this.selectfunciones.nativeElement.value;
    this._service.getFuncionPlantilla(funcion).subscribe(response => {
      this.funciones = response;
      console.log(this.funciones);
    })
  }
}