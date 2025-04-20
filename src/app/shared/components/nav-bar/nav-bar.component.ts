import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Output() tipoSeleccionado = new EventEmitter<'pelicula' | 'serie'>();

  seleccionar(tipo: 'pelicula' | 'serie') {
    this.tipoSeleccionado.emit(tipo);
  }
}