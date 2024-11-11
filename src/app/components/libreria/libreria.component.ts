import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServicesComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit{

  public comics!: Array<Comic>;
  public favorito: Comic | null = null;

  seleccionarFavorito(comic: Comic): void {
    this.favorito = comic;
  }

  constructor (
    private _service: ServicesComics
  ){}
  ngOnInit():void{
      this.comics= this._service.getComics();
  }
  agregarComic(nombre: string, imagen: string, descripcion: string): void {
    const nuevoComic = new Comic(nombre, imagen, descripcion);
    this.comics.push(nuevoComic);
  }
}
