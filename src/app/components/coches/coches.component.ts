import { Component } from '@angular/core';
import { ServiceCoches } from '../../services/service.coche';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css'
})
export class CochesComponent {
  public coches!: Array<Coche>;
  constructor(private _servie: ServiceCoches){}

  ngOnInit(): void{
    this._servie.getCoches().subscribe(response => {
      this.coches = response;
    })
  }
}
