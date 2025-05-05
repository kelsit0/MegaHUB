import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentFilterService {
  ///lo dejamos por defecto en pelis
  private tipoSeleccionadoSubject = new BehaviorSubject<'pelicula' | 'serie'>('pelicula');
  tipoSeleccionado$=this.tipoSeleccionadoSubject.asObservable();

  setTipo(tipo: 'pelicula' | 'serie'){
    this.tipoSeleccionadoSubject.next(tipo);
  }

  getTipoActual():'pelicula' | 'serie'{
    return this.tipoSeleccionadoSubject.getValue();
  }

  constructor() { }
}
