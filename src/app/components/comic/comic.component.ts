import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Output() favoritoSeleccionado: EventEmitter<any> = new EventEmitter<void>();

  seleccionarFavorito(): void {
    this.favoritoSeleccionado.emit();
  }
}