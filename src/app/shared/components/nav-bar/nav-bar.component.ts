import { Component, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  ///para manejar estados de las series, peliculas etc etc
  @Output() tipoSeleccionado = new EventEmitter<'pelicula' | 'serie'>();

  
  constructor(private router:Router){

  }
  seleccionar(tipo: 'pelicula' | 'serie') {
    this.tipoSeleccionado.emit(tipo);
    this.router.navigate(['/home']);

  }

  verFav():void{
    this.router.navigate(['favorites'])
  }
}