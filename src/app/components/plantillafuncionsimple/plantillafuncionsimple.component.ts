import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantillas } from '../../services/service.platillas';

@Component({
  selector: 'app-plantillafuncionsimple',
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrls: ['./plantillafuncionsimple.component.css']
})
export class PlantillaFuncionSimpleComponent implements OnInit {

  @ViewChild('select') cajaSelect!: ElementRef;

  public plantillas!: Array<string>;
  public funciones!: Array<Plantilla>;

  constructor(private _service: ServicePlantillas) {
  }

  ngOnInit(): void {
    this._service.getPlantilla().subscribe(response => {
      this.plantillas = response;
    })
  }

  verFuncionPlantilla() {
    let funcion = this.cajaSelect.nativeElement.value;
    this._service.getFuncionPlantilla(funcion).subscribe(response => {
      this.funciones = response;
      console.log(this.funciones);
    })
  }
}